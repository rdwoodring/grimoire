import ICard from './ICard';

export default interface IConfirmPage {
  fetchingInitialCardList: boolean;
  cards: Array<ICard>;
  _cardsById: Array<string>;
  cardQuantities: Map<string, number>;
};