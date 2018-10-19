import actionTypes from '../../constants/constants';

import ICard from '../../types/ICard';

interface IProps {
    cards: Map<string, ICard>;
    _cardsById: Array<string>;
};

const defaultState: IProps = {
    cards: new Map<string, ICard>(),
    _cardsById: []
}

export default function(state: IProps = defaultState, action: any) {
    switch (action.type) {
        case actionTypes.UPDATE_CARD_LIST:
            return {
                ...state,
                ...{
                    cards: action.payload,
                    _cardsById: Array.from(action.payload.keys())
                }
            }
        default:
            return state;
    }
}