import actionTypes from '../../constants/constants';

const defaultState = {
    rawCardsList: ''
};

interface IRawCardsList {
    rawCardsList: string
};

export default function deck(state: IRawCardsList = defaultState, action: any) {
    switch (action.type) {
    case actionTypes.UPDATE_RAW_CARD_LIST:
        return {
            ...state,
            ...{rawCardsList: action.payload}
        };
    default:
        return state;
    }
}