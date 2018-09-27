import React, {Component} from 'react';
import axios from 'axios';
import './Calculator.css';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.maxChars = 20;
        this.state = {
            displayValue: "0"
        }

    }


    render() {
        return (
            <div id="wrapper">
                <div id="calculator-app">
                    <div className="calculator">
                        <CalculatorDisplay value={this.state.displayValue}/>
                        <div className="calculator-keypad">
                            <div className="input-keys">
                                <div className="function-keys">
                                    <CalculatorKey caption="C" onClick={this._clearScreen.bind(this)}/>
                                    <CalculatorKey caption="±" onClick={this._changeSign.bind(this)}/>
                                    <CalculatorKey caption="←" onClick={this._deleteCharacter.bind(this)}/>
                                </div>
                                <div className="digit-keys">
                                    <CalculatorKey caption="0" size="big" onClick={this._addCharacter.bind(this)}/>
                                    <CalculatorKey caption="." onClick={this._addCharacter.bind(this)}/>
                                    {this._getDigitButtons(this._addCharacter.bind(this))}
                                </div>
                            </div>
                            <div className="operator-keys">
                                <CalculatorKey caption="+" onClick={this._addCharacter.bind(this)}/>
                                <CalculatorKey caption="-" onClick={this._addCharacter.bind(this)}/>
                                <CalculatorKey caption="*" onClick={this._addCharacter.bind(this)}/>
                                <CalculatorKey caption="/" onClick={this._addCharacter.bind(this)}/>
                                <CalculatorKey caption="=" onClick={this._calculate.bind(this)}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }


    _getDigitButtons(onClickEvent) {
        var digitList = Array.from(Array(10).keys()).splice(1);
        return digitList.map(number => <CalculatorKey key={number} caption={number} onClick={onClickEvent}/>)
    }

    _formatNumber(string) {
        var number = Number(string);
        if (number.toString().length < this.maxChars) {
            return number
        }
        else {
            return number.toExponential(this.maxChars - 5)
        }

    }

    _addCharacter(event) {
        var character = event.target.innerHTML
        var currentValue = this.state.displayValue;
        if (currentValue.length >= this.maxChars)
            return;

        var prefix = "";

        if (currentValue != "0") {
            prefix = currentValue;
        }
        this.setState({displayValue: prefix + character});

    }

    _clearScreen() {
        this.setState({displayValue: "0"});
    }

    _changeSign() {
        var currentValue = this.state.displayValue;
        if (currentValue != "0") {
            if (currentValue.charAt(0) == "-") {
                this.setState({displayValue: currentValue.slice(1)});
            } else {
                this.setState({displayValue: "-" + currentValue});
            }
        }
    }

    _deleteCharacter() {
        var currentValue = this.state.displayValue.toString();
        if (currentValue != "0") {
            if (currentValue.length > 1) {
                this.setState({displayValue: currentValue.substring(0, currentValue.length - 1)});
            } else {
                this.setState({displayValue: "0"});
            }
        }
    }

    _calculate() {
        var currentValue = this.state.displayValue;
        var that = this;

        axios.get('/calculate', {params: {query: currentValue}})
            .then((response) => {
                    that.setState({displayValue: that._formatNumber(response.data.result.toString())});
                }
            )
            .catch(err => console.log(err));

    }
}


class CalculatorKey extends Component {

    static defaultProps = {caption: "?"};


    constructor(props) {
        super(props);


        this.classes = "calculator-key";


        if (props.size) {
            this.classes += " size-" + this.props.size;
        }


    }

    render() {
        return (<button className={this.classes} onClick={this.props.onClick}>{this.props.caption}</button>);
    }

}

class CalculatorDisplay extends Component {


    render() {
        return (<div className="calculator-display">
            <AutoScalingText>{this.props.value}</AutoScalingText>


        </div>);
    }

}

class AutoScalingText extends React.Component {
    state = {
        scale: 1
    };

    componentDidUpdate() {
        const {scale} = this.state

        const node = this.node
        const parentNode = node.parentNode

        const availableWidth = parentNode.offsetWidth
        const actualWidth = node.offsetWidth
        const actualScale = availableWidth / actualWidth

        if (scale === actualScale)
            return

        if (actualScale < 1) {
            this.setState({scale: actualScale})
        } else if (scale < 1) {
            this.setState({scale: 1})
        }
    }

    render() {
        const {scale} = this.state

        return (
            <div
                className="auto-scaling-text"
                style={{transform: `scale(${scale},${scale})`}}
                ref={node => this.node = node}
            >{this.props.children}</div>
        )
    }
}

export default Calculator;
