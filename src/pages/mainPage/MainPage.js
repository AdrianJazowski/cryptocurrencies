/** @format */

import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CryptocurrenciesTable from "../../components/cryptocurrenciesTable/CryptocurrenciesTable";
import Loading from "../../components/loading/Loading";
import SearchInput from "../../components/searchInput/SearchInput";

const MainPage = () => {
  const selectedUserCryptocurrencies = useSelector(
    ({ userCryptocurrencies }) => userCryptocurrencies
  );
  return (
    <MainPageWrapper>
      <SearchInput />
      {selectedUserCryptocurrencies.length !== 0 ? (
        <CryptocurrenciesTable rows={selectedUserCryptocurrencies} />
      ) : (
        <Loading />
      )}
    </MainPageWrapper>
  );
};

export default MainPage;

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
