/** @format */

import { actionsTypes } from "../actions/actionsTypes";
import { inputValues } from "../utils/Utils";

const initialState = {
  dataForInput: inputValues,
  userCryptocurrencies: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.GET_CRYPTOCURRENCIES_FROM_API:
      return {
        ...state,
        userCryptocurrencies: [...payload],
      };
    case actionsTypes.GET_DATA_FOR_INPUT:
      return {
        ...state,
        dataForInput: [...payload],
      };
    default:
      return state;
  }
};

export default reducer;
