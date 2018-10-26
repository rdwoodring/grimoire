import actionTypes from "../../constants/constants";

import IConfirmPage from '../../types/IConfirmPage';
// import ICard from '../../types/ICard';

const defaultState: IConfirmPage = {
    fetchingInitialCardList: false,
    cards: {},
    _cardsById: []
};

export default function deck(state: IConfirmPage = defaultState, action: any) {
    switch (action.type) {
        case actionTypes.UPDATE_FETCHING_INITIAL_DECK_LIST:
            return { 
                ...state, 
                ...{ 
                    fetchingInitialCardList: action.payload 
                } 
            };
        case actionTypes.UPDATE_INITIAL_CARD_LIST:
            return { 
                ...state, 
                ...{ 
                    cards: action.payload, 
                    // _cardsById: Array.from(action.payload.keys())
                    _cardsById: Object.keys(action.payload)
                }
            };
        default:
            return state;
    }
}
