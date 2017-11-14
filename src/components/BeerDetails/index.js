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
  max-width: 500%;
`;
const BeerLabelImg = styled.img`
  width: 100%;
  height: auto;
`;
const BeerInfoWrapper = styled.div`
  flex: 1 1 auto;
  max-width: 50%;
  padding: 50px 0 0 50px;
`;

const BeerDetails = ({ currentBeer, loadNewBeer }) => {
  console.log(currentBeer);
  const beerLabel = currentBeer.labels ? (
    <BeerLabelImg src={currentBeer.labels.medium} alt="" />
  ) : null;

  if (!currentBeer.id) {
    return <div>Loading...</div>;
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
