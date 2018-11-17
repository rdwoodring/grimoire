import * as React from 'react';

import Listing from '../listings/Listing';
import CardType from '../listing-items/CardType';

interface IProps {
    cardColors: {
        [type: string]: number;
    }
};

class CardColors extends React.Component<IProps> {
    public render() {
        const cardColorsArray = Object.keys(this.props.cardColors)
            .map((cardColor) => {
                return {
                    type: cardColor,
                    count: this.props.cardColors[cardColor]
                }
            });

        return (
            <div>
                <Listing 
                    itemData={cardColorsArray}
                    itemRenderer={
                        (item) => {
                            return <CardType {...item} key={item.type} />;
                        }
                    }
                />
            </div>
        )
    }
}

export default CardColors;