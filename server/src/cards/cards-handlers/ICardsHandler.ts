export default interface ICardsHandler {
    getCards(cards: Array<string>): Promise<any>
};