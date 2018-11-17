import ICard from './ICard';

export default interface IConfirmPage {
    fetchingInitialCardList: boolean;
    cards: {
        [s: string]: ICard
    };
    _cardsById: Array<string>;
};