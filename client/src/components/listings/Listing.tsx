import * as React from "react";

export interface IProps<T> {
    itemData: Array<T>;
    itemRenderer: (item: T) => JSX.Element;
}

class Listing<T> extends React.Component<IProps<T>> {
    public render() {
        return (
            <div>
                {this.props.itemData.map(this.props.itemRenderer)}
            </div>
        );
    }
}
    
export default Listing;
    