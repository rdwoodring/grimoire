import * as React from 'react';

import Listing from '../../listings/Listing';
import CardLine from '../../listing-items/CardLine';

import IDeck from '../../../types/IDeck';
import ICard from '../../../types/ICard';

class DeckBuilderDashboard extends React.Component<IDeck> {
    public render() {
        const cards: ICard[] = this.props._cardsById.map((id) => {
            return this.props.cards[id];
        });

        return (
            <div>
                <div>
                    Deck Builder Dashboard
                </div>
                <div>
                    <Listing itemData={cards} itemRenderer={(item: ICard) => {return <CardLine {...item} key={item.id} />;} } />
                </div>
            </div>
        )
    }
}

export default DeckBuilderDashboard;