/** @format */

import { actionsTypes } from "../actions/actionsTypes";

const initialState = {
  dataForInput: [
    { name: "Bitcoin", id: 1 },
    { name: "Ethereum", id: 1027 },
    { name: "Tether", id: 825 },
    { name: "Binance Coin", id: 1839 },
  ],
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
