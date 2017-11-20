import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Lato, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const CardHeader = styled.header`
  padding-top: 10px;
  padding-bottom: 32px;
`;

const CardImageWrapper = styled.div`
  width: 75%;
  margin: auto;
  padding-bottom: 10px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardHeading = styled.h1`
  width: 75%;
  font-size: 20px;
  text-align: center;
  margin: auto;
`;

const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  a {
    text-decoration: none;
  }
`;

const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 30px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

const BeerCard = ({ beer }) => {
  return (
    <CardWrapper>
      <CardHeader>
        <CardImageWrapper>
          <CardImage src={beer.labels.medium} />
        </CardImageWrapper>
        <CardHeading>{beer.nameDisplay}</CardHeading>
      </CardHeader>

      <CardBody>
        <CardFieldset>
          <Link to={`/beer/${beer.id}`}>
            <CardButton type="button">Show More</CardButton>
          </Link>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  );
};

export default BeerCard;
