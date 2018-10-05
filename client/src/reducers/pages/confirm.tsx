import actionTypes from "../../constants/constants";

// import { Deck } from "../../types/deck";

interface IConfirmState {
    fetchingInitialCardList: boolean
}

const defaultState: IConfirmState = {
    fetchingInitialCardList: false
};

export default function deck(state: IConfirmState = defaultState, action: any) {
    switch (action.type) {
        case actionTypes.UPDATE_FETCHING_INITIAL_DECK_LIST:
            return {
                ...state,
                ...{fetchingInitialCardList: action.payload}
            };
        default:
            return state;
    }
}
