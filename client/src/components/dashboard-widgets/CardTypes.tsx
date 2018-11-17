import * as React from 'react';

import Listing from '../listings/Listing';
import CardType from '../listing-items/CardType';

interface IProps {
    cardTypes: {
        [type: string]: number;
    }
};

class CardTypes extends React.Component<IProps> {
    public render() {
        const cardTypesArray = Object.keys(this.props.cardTypes)
            .map((cardType) => {
                return {
                    type: cardType,
                    count: this.props.cardTypes[cardType]
                }
            });
        return (
            <div>
                <Listing 
                    itemData={cardTypesArray} 
                    itemRenderer={
                        (item) => {
                            return <CardType {...item} key={item.type} />;
                        }
                    }
                />
            </div>
        );
    }
}

export default CardTypes;