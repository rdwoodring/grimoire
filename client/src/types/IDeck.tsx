import ICard from './ICard';

export default interface IDeck {
    cards: {
        [s: string]: ICard
    };
    _cardsById: Array<string>;
};