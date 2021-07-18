/** @format */

import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import MainPage from "./pages/mainPage/MainPage";
import GlobalStyles from "./globalStyles/GlobalStyles";
import HeroBanner from "./components/heroBanner/HeroBanner";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getCryptocurrenciesFromApi, getDataForInput } from "./actions";

const App = () => {
  const dispatch = useDispatch();

  const getFirstCryptocurrenciesToMainPage = (quantity) => {
    const apiUrl = `https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${quantity}`;
    axios
      .get(apiUrl, {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.REACT_APP_API_KEY,
        },
      })

      .then((response) => {
        const cryptocurrencies = response.data.data.map((crypto) => {
          const { name, symbol } = crypto;
          const { price, volume_24h, market_cap } = crypto.quote.USD;
          const newCryptocurrencies = {
            name: name,
            symbol: symbol,
            price: price,
            volume: volume_24h,
            marketCap: market_cap,
          };
          return newCryptocurrencies;
        });

        dispatch(getCryptocurrenciesFromApi(cryptocurrencies));
      })
      .catch((err) => console.log(err));
  };

  const getDataFromApiToInput = (quantity) => {
    const apiUrl = `https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${quantity}`;
    axios
      .get(apiUrl, {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.REACT_APP_API_KEY,
        },
      })
      .then((response) => {
        const cryptoNames = response.data.data.map((crypto) => {
          const arrayOfCrypto = {
            name: crypto.name,
            id: crypto.id,
          };
          return arrayOfCrypto;
        });
        dispatch(getDataForInput(cryptoNames));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFirstCryptocurrenciesToMainPage(10);
    getDataFromApiToInput(500);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <HeroBanner />
      <MainPage />
    </>
  );
};

export default App;
