// @flow

import React from 'react';
// import { string } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  width:32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width:46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = (props: Show) => (
  <Wrapper to={`/details/${props.imdbID}`}>
    <Image src={`/public/img/posters/${props.poster}`} alt={`${props.title} Show Poster`} />
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p>
      {/* <p>{props.foo}</p> */}
    </div>
  </Wrapper>
);

// ShowCard.defaultProps = {
//   foo: 'stuff'
// };

export default ShowCard;
