/** @format */

import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCryptocurrenciesFromApi } from "../../actions";

const useStyles = makeStyles(() => ({
  root: {
    width: 600,
    margin: "2rem",
  },
}));

const SearchInput = () => {
  const [values, setValues] = useState([]);
  const selectedDataForInput = useSelector(({ dataForInput }) => dataForInput);
  const classes = useStyles();
  const dispatch = useDispatch();

  const getCryptocurrenciesId = (e) => {
    e.preventDefault();
    const cryptoIds = values.map((value) => value.id);
    getCryptocurrenciesFromApiUponReguest(cryptoIds);
    setValues([]);
  };

  const getCryptocurrenciesFromApiUponReguest = (cryptocurrencies) => {
    const apiUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${cryptocurrencies}`;
    dispatch(getCryptocurrenciesFromApi([]));
    axios
      .get(apiUrl, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "X-CMC_PRO_API_KEY": process.env.REACT_APP_API_KEY,
        },
      })
      .then((response) => {
        const crypoArray = Object.values(response.data.data);

        const cryptocurrencies = crypoArray.map((crypto) => {
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

  return (
    <form onSubmit={getCryptocurrenciesId}>
      <div className={classes.root}>
        <Autocomplete
          multiple
          limitTags={3}
          id="multiple-limit-tags"
          options={selectedDataForInput}
          getOptionLabel={(option) => option.name}
          value={values}
          onChange={(e, value) => setValues(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Choose your cryptocurrencies"
              placeholder="cryptocurrencies"
              id="cryptocurrencies"
            />
          )}
        />
      </div>
    </form>
  );
};
export default SearchInput;
