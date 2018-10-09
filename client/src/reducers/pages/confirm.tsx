import actionTypes from "../../constants/constants";

import Card from '../../types/card';

interface IConfirmState {
    fetchingInitialCardList: boolean,
    cards: Array<Card>,
    _cardsById: Array<string>
}

const defaultState: IConfirmState = {
    fetchingInitialCardList: false,
    cards: [],
    _cardsById: []
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
             }
        default:
            return state;
    }
}
