import actionTypes from "../../constants/constants";

const updateRawCardList = (fetching: boolean) => {
  return {
    type: actionTypes.UPDATE_FETCHING_INITIAL_DECK_LIST,
    payload: fetching
  };
};

export default updateRawCardList;
