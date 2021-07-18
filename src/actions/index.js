/** @format */

import { actionsTypes } from "./actionsTypes";

export const getDataForInput = (cryptocurrencies) => ({
  type: actionsTypes.GET_DATA_FOR_INPUT,
  payload: cryptocurrencies,
});
export const getCryptocurrenciesFromApi = (cryptocurrencies) => ({
  type: actionsTypes.GET_CRYPTOCURRENCIES_FROM_API,
  payload: cryptocurrencies,
});
