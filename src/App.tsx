import React, { Component } from 'react';
import './App.css';
import BoardComp from './components/BoardComp';
import { ChessType } from './types/enums';

const chessesArr = [
    ChessType.black,
    ChessType.none,
    ChessType.red,
    ChessType.red,
    ChessType.black,
    ChessType.none,
    ChessType.red,
    ChessType.black,
    ChessType.none,
]

export default class App extends Component {
    state = {
        num: 0,
    };
    render() {
        return (
            <>
                <BoardComp chesses={chessesArr} isGameOver={false} onClick={(i) => {
                    console.log(i);
                    
                }}/>
            </>
        );
    }
}
