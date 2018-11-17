import * as React from "react";

interface IProps {
    type: string;
    count: number;
};

class CardType extends React.Component<IProps> {
    public render() {
        return (
            <div>
                {this.props.type} - {this.props.count}
            </div>
        );
    }
}

export default CardType;
