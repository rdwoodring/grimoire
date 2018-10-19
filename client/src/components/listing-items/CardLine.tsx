import * as React from "react";

import ICard from '../../types/ICard'

// export interface IProps<T> {
//     itemData: Array<T>;
//     itemRenderer: (item: T) => JSX.Element;
// }

class CardLine extends React.Component<ICard> {
    public render() {
        return (
            <div>
                <hr />
                <div>{this.props.quantity}</div>
                <div>{this.props.name}</div>
                <hr />
            </div>
        );
    }
}

export default CardLine;
