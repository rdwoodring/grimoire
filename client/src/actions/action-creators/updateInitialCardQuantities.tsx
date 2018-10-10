import actionTypes from "../../constants/constants";

const updateInitialCardQuantities = (cardQuantities: Map<string, number>) => {
  return {
    type: actionTypes.UPDATE_INITIAL_CARD_QUANTITIES,
    payload: cardQuantities
  };
};

export default updateInitialCardQuantities;
