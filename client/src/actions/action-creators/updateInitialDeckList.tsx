import actionTypes from "../../constants/constants";
import ICard from '../../types/ICard';
// import Deck from '../../types/deck';

const updateInitialCardList = (cards: Array<ICard>) => {
    return {
        type: actionTypes.UPDATE_INITIAL_CARD_LIST,
        payload: cards
    };
};

export default updateInitialCardList;
