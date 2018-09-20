// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>svideo</h1>
    <input type="text" placeholder="search" />
    <Link to="/Search">or browse All</Link>
  </div>
);

export default Landing;
