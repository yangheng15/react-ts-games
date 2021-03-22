import React from 'react';
import { ChessType, GameStatus } from '../types/enums';

interface IProps {
    status: GameStatus;
    next: ChessType;
}
export default function StatusComp(props: IProps) {
    let content: JSX.Element;
    if (props.status === GameStatus.gameing) {
        if (props.next === ChessType.red) {
            content = <div className="next red">红方</div>;
        } else {
            content = <div className="next black">黑方</div>;
        }
    } else {
        if (props.status === GameStatus.redWin) {
            content = <div className="next red">红方胜利</div>;
        } else if (props.status === GameStatus.blackWin) {
            content = <div className="next black">黑方胜利</div>;
        } else {
            content = <div className="next equal">平局</div>;
        }
    }

    return <div style={{ marginBottom: '10px' }}>{content}</div>;
}
