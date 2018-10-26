import * as React from "react";

import Button from '../form-elements/buttons/Button';

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
                <div style={{overflow: 'auto'}}>
                    <div style={{float: 'left'}}>
                        {this.props.quantity} - {this.props.name}
                    </div>
                    <div style={{float: 'right'}}>
                        <Button label="Swap" onClick={() => {console.log('Swap!')}} />
                        <Button label="Delete" onClick={() => {console.log('Delete!')}} />
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default CardLine;
