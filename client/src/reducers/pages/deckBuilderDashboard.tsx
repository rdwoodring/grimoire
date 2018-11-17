import actionTypes from '../../constants/constants';

import ICard from '../../types/ICard';

interface IProps {
    cards: {
        [s: string]: ICard
    };
    _cardsById: Array<string>;
};

const defaultState: IProps = {
    cards: {},
    _cardsById: []
}

export default function(state: IProps = defaultState, action: any) {
    switch (action.type) {
        case actionTypes.UPDATE_CARD_LIST:
            return {
                ...state,
                ...{
                    cards: action.payload,
                    _cardsById: Object.keys(action.payload)
                }
            }
        default:
            return state;
    }
}