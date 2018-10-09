import actionTypes from "../../constants/constants";
import Card from '../../types/card';
// import Deck from '../../types/deck';

const updateInitialCardList = (cards: Array<Card>) => {
    return {
        type: actionTypes.UPDATE_INITIAL_CARD_LIST,
        payload: cards
    };
};

export default updateInitialCardList;
