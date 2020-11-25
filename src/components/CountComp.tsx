import React, { Component } from 'react';
interface IProps {
    num: number;
    onChange?: (n: number) => void;
}
export default class CountComp extends Component<IProps> {
    render() {
        return (
            <div>
                <button onClick={() => {
                    if(this.props.onChange) {
                        this.props.onChange(this.props.num - 1)
                    }
                }}>-</button>
                <span>{this.props.num}</span>
                <button onClick={() => {
                    if(this.props.onChange) {
                        this.props.onChange(this.props.num + 1)
                    }
                }}>+</button>
            </div>
        );
    }
}
