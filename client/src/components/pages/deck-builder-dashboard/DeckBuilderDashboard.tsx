import * as React from 'react';

import Listing from '../../listings/Listing';
import CardLine from '../../listing-items/CardLine';

import CardTypes from '../../dashboard-widgets/CardTypes';
import CardColors from '../../dashboard-widgets/CardColors';

import manaColors from '../../../constants/manaColors';

import IDeck from '../../../types/IDeck';
import ICard from '../../../types/ICard';

class DeckBuilderDashboard extends React.Component<IDeck> {
    public render() {
        const cards: ICard[] = this.props._cardsById.map((id) => {
                return this.props.cards[id];
            }),
            uniqueCardTypes = this.generateUniqueCardTypes(),
            colorBreakdown = this.generateColorBreakdown();

        console.log(colorBreakdown);
        

        // this.generateColorBreakdown();

        return (
            <div>
                <div>
                    Deck Builder Dashboard
                </div>
                <div style={{overflow: 'auto'}}>
                    <div style={{float: 'left', width: '25%'}}>
                        <CardTypes cardTypes ={uniqueCardTypes} />
                    </div>
                    <div style={{float: 'left', width: '25%'}}>
                        <CardColors cardColors={colorBreakdown} />
                    </div>
                    <i style={{clear: 'both'}} />
                </div>
                <div>
                    <Listing itemData={cards} itemRenderer={(item: ICard) => {return <CardLine {...item} key={item.id} />;} } />
                </div>
            </div>
        )
    }

    private generateUniqueCardTypes() {
        return this.props._cardsById.reduce((accumulator, id) => {
            const types = this.props.cards[id].types;

            types.forEach((type) => {
                if (accumulator[type]) {
                    accumulator[type] = accumulator[type] + 1;
                } else {
                    accumulator[type] = 1;
                }
            });

            return accumulator;
        }, {});
    }

    private generateColorBreakdown() {
        return this.props._cardsById.reduce((accumulator, id) => {
            const manaCost: string|undefined = this.props.cards[id].manaCost;

            if (manaCost) {
                const cleanedManaCost = manaCost.replace('}{', '|')
                    .replace('}', '')
                    .replace('{', '')
                    .split('|')
                    .filter((mana) => {
                        return manaColors.indexOf(mana) >= 0;
                    });

                cleanedManaCost.forEach((color) => {
                    if (accumulator[color] !== void(0)) {
                        accumulator[color]++;
                    } else {
                        accumulator[color] = 0;
                    }
                });
            }

            return accumulator;
        }, {});
    }
}

export default DeckBuilderDashboard;