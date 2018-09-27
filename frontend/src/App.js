import React, {Component} from 'react';
import logo from './calculator_icon.png';
import './App.css';
import Calculator from "./Calculator";
import CalculationHistory from "./CalculationHistory"

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Amazing Cloud Calculator</h1>
                </header>
                <Calculator/>
                <CalculationHistory/>

            </div>
        );
    }
}

export default App;
