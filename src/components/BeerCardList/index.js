import React from "react";
import styled from "styled-components";
import BeerCard from "../BeerCard";

const ListWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.div`
  flex: 0 1 auto;
  width: calc(100% / 3);
  min-width: 300px;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
`;

const LoadMoreWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LoadMoreBtn = styled.button`
  padding: 12px 15px;
  font-size: 12px;
  font-weight: 700;
  background-color: lightgray;
  border: 0;
  border-radius: 20px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

const BeerCardList = ({ list, loadMore }) => {
  if (!list.length || !list[0]) {
    return <LoadingWrapper>Loading...</LoadingWrapper>;
  }

  return (
    <ListWrapper>
      {list.map(beer => (
        <ListItem key={beer.id}>
          <BeerCard key={beer.id} beer={beer} />
        </ListItem>
      ))}
      <LoadMoreWrapper>
        <LoadMoreBtn onClick={loadMore}>Load More Beers!</LoadMoreBtn>
      </LoadMoreWrapper>
    </ListWrapper>
  );
};

export default BeerCardList;
