import actionTypes from "../../constants/constants";
import ICard from "../../types/ICard";

const updateCardList = (cards: {
  [s:string]: ICard
}) => {
  return {
    type: actionTypes.UPDATE_CARD_LIST,
    payload: cards
  };
};

export default updateCardList;
