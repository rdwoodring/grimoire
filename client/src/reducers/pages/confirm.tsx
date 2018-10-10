import actionTypes from "../../constants/constants";

import ICard from '../../types/ICard';

interface IConfirmState {
    fetchingInitialCardList: boolean,
    cards: Array<Card>,
    _cardsById: Array<string>,
    cardQuantities: Map<string, number>
}

const defaultState: IConfirmState = {
    fetchingInitialCardList: false,
    cards: [],
    _cardsById: [],
    cardQuantities: new Map()
};

export default function deck(state: IConfirmState = defaultState, action: any) {
    switch (action.type) {
        case actionTypes.UPDATE_FETCHING_INITIAL_DECK_LIST:
            return {
                ...state,
                ...{fetchingInitialCardList: action.payload}
            };
        case actionTypes.UPDATE_INITIAL_CARD_LIST:
             return {
                 ...state,
                 ...{
                     cards: action.payload,
                     _cardsById: action.payload.map((card: Card) => {
                        return card.id;
                     })
                 }
             };
        case actionTypes.UPDATE_INITIAL_CARD_QUANTITIES:
             return {
                 ...state,
                 ...{
                     cardQuantities: action.payload
                 }
             };
        default:
            return state;
    }
}
