import React, {Component} from 'react';
import axios from 'axios';
import './CalculationHistory.css';

class CalculationHistory extends Component {

    constructor() {
        super()
        this.state = {history: "{}"}
        this.pollingInterval = 500;
        this.newestFirst = true;
    }

    componentWillMount() {
        this._fetchCalculationHistory();
    }

    componentDidMount() {
        this._timer = setInterval(() => this._fetchCalculationHistory(), this.pollingInterval)
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

    render() {
        return (<div className="calculation-history-wrapper">
            <h2>History of calculations</h2>
            <div className="calculation-history">

                <table className="calculations-table">
                    <tr>
                        <th>Date</th>
                        <th>Query</th>
                        <th>Result</th>
                        <th>IP</th>
                    </tr>
                    {this._getCalculations()}
                </table>

            </div>
        </div>);
    }

    _getCalculations() {
        var history = Array.from(this.state.history);
        return history.map((calculation) =>
            <CalculationRow timestamp={calculation.timestamp} query={calculation.query} result={calculation.result}
                            ip={calculation.ip}/>
        )
    }

    _fetchCalculationHistory() {
        axios.get('/api/calculations')
            .then((response) => {
                    var calculations = response.data._embedded.calculations;
                    if (this.newestFirst) {
                        calculations.reverse()
                    }
                    this.setState({history: calculations});
                }
            )
    }

}

class CalculationRow extends Component {
    render() {
        return (
            <tr>
                <td>{new Date(this.props.timestamp).toLocaleString()}</td>
                <td>{this.props.query}</td>
                <td>{this.props.result}</td>
                <td>{this.props.ip}</td>
            </tr>
        );
    }
}

export default CalculationHistory;