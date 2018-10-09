import Card from './card';

export default interface Deck {
    // cards: {
    //     quantity: number,
    //     card: Card
    // }[]
    cards: Map<string, Card>,
    cardQuantities: Map<string, number>,
    _cardsById: Array<string>,
};