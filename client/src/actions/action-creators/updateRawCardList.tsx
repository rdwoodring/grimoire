import actionTypes from '../../constants/constants';

const updateRawCardList = (rawCardList: string) => {
    return {
        type: actionTypes.UPDATE_RAW_CARD_LIST,
        payload: rawCardList
    };
};

export default updateRawCardList;