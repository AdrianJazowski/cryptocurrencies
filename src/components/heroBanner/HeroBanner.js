/** @format */

import React from "react";
import styled from "styled-components";

const HeroBanner = () => {
  return (
    <HeroBannerWrapper>
      <h1>Wszystkie kryptowaluty w twoim zasięgu!</h1>
      <p>
        Z nami możesz znaleźć każdą interesująca Cię kryptowalute. Skorzystaj z
        naszej wyszukiwarki poniżej!
      </p>
    </HeroBannerWrapper>
  );
};

export default HeroBanner;

const HeroBannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;
