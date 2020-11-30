import { ChessType } from "../types/enums";
import ChessComp from "./ChessComp";
import './BoardComp.css'
interface IProps {
    chesses: ChessType[]
    isGameOver?: boolean 
    onClick?: (index: number) => void
}

export const BoardComp: React.FC<IProps> = function(props: IProps) {
    const list = props.chesses.map((type, i) => {
        return (
            <ChessComp key={i} type={type} onClick={() => {
                if(props.onClick) {
                    props.onClick(i);
                }
            }}/>
        )
    })

    return (
        <div className="board">
            {list}
        </div>
    )
}

BoardComp.defaultProps = {

}
