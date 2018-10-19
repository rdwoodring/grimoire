import ICard from './ICard';

export default interface IDeck {
    // cards: {
    //     quantity: number,
    //     card: Card
    // }[]
    cards: Map<string, ICard>;
    _cardsById: Array<string>;
};