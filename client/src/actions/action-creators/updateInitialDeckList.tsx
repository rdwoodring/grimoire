import actionTypes from "../../constants/constants";
import ICard from '../../types/ICard';
// import Deck from '../../types/deck';

const updateInitialCardList = (cards: Map<string, ICard>) => {
    return {
        type: actionTypes.UPDATE_INITIAL_CARD_LIST,
        payload: cards
    };
};

export default updateInitialCardList;
