import React, { Component } from 'react';
import './App.css';
import CountComp from './components/CountComp';

export default class App extends Component {
    state = {
        num: 0,
    };
    render() {
        return (
            <CountComp
                num={this.state.num}
                onChange={(num) => {
                    this.setState({
                        num,
                    });
                }}
            />
        );
    }
}
