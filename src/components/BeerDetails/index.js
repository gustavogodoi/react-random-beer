import React from "react";
import styled from "styled-components";

const BodyWrapper = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: 85vw;
  margin: auto;
`;
const BeerLabelWrapper = styled.div`
  flex: 1 1 auto;
  max-width: 100%;
  display: flex;
`;
const BeerLabelImg = styled.img`
  max-width: 100%;
  height: auto;
  margin: auto;
`;
const BeerInfoWrapper = styled.div`
  flex: 1 1 auto;
  max-width: 50%;
  padding: 50px 0 0 50px;
`;
const LoadingWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const BeerDetails = ({ currentBeer, loadNewBeer }) => {
  const beerLabel = currentBeer.labels ? (
    <BeerLabelImg src={currentBeer.labels.medium} alt="" />
  ) : null;

  if (!currentBeer.id) {
    return <LoadingWrapper>Loading...</LoadingWrapper>;
  }

  return (
    <div>
      <BodyWrapper>
        <BeerLabelWrapper>{beerLabel}</BeerLabelWrapper>
        <BeerInfoWrapper>
          <button onClick={loadNewBeer}>Load a new beer! </button>
          <h2>{currentBeer.name}</h2>
          <p>Abv: {currentBeer.abv}</p>
          <p>Style: {currentBeer.style.name}</p>
          <p>{currentBeer.description}</p>
          <p>Brewery: {currentBeer.breweries[0].name}</p>
        </BeerInfoWrapper>
      </BodyWrapper>
    </div>
  );
};

export default BeerDetails;
