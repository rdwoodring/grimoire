import ICard from './ICard';

export default interface IConfirmPage {
  fetchingInitialCardList: boolean;
  cards: Map<string, ICard>;
  _cardsById: Array<string>;
};