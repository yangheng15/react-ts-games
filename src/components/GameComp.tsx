import React, { Component } from 'react';
import { ChessType, GameStatus } from '../types/enums';
import { BoardComp } from './BoardComp';
import StatusComp from './StatusComp';
import './GameComp.css';

interface IState {
    chesses: ChessType[];
    status: GameStatus;
    nextChess: ChessType.black | ChessType.red;
}
export default class GameComp extends Component<{}, IState> {
    state: IState = {
        chesses: [],
        status: GameStatus.gameing,
        nextChess: ChessType.black, // 黑子先下
    };

    componentDidMount() {
        this.init();
    }

    init() {
        let chesses: ChessType[] = [];
        for (let i = 0; i < 9; i++) {
            chesses.push(ChessType.none);
        }
        this.setState({
            chesses,
            status: GameStatus.gameing,
        });
    }

    handleChessClick = (index: number) => {
        const chessesArr = [...this.state.chesses];
        chessesArr[index] = this.state.nextChess;
        this.setState((prevState: IState) => ({
            chesses: chessesArr,
            nextChess: prevState.nextChess === ChessType.black ? ChessType.red : ChessType.black,
            status: this.getStatus(chessesArr, index), // 改变后的数据和索引
        }));
    };

    getStatus(chesses: ChessType[], index: number): GameStatus {
        // 横向和纵向判断是否胜利
        const horMin = Math.floor(index / 3) * 3;
        const verMin = index % 3;
        if (
            (chesses[horMin] === chesses[horMin + 1] && chesses[horMin] === chesses[horMin + 2]) ||
            (chesses[verMin] === chesses[verMin + 3] && chesses[verMin] === chesses[verMin + 6]) ||
            (chesses[0] === chesses[4] && chesses[0] === chesses[8] && chesses[0] !== ChessType.none) ||
            (chesses[2] === chesses[4] && chesses[2] === chesses[6] && chesses[2] !== ChessType.none)
        ) {
            return chesses[index] === ChessType.black ? GameStatus.blackWin : GameStatus.redWin;
        }

        // 判断是否是平局
        if(!chesses.includes(ChessType.none)) {
            return GameStatus.queal
        }

        return GameStatus.gameing;
    }

    render() {
        return (
            <div className="game-comp">
                <StatusComp next={this.state.nextChess} status={this.state.status} />
                <BoardComp chesses={this.state.chesses} isGameOver={this.state.status !== GameStatus.gameing} onClick={this.handleChessClick} />
            </div>
        );
    }
}
