import React from 'react';
import preload from '../data.json';

const search = () => (
  <div className="search">
    {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
    {preload.shows.map(show => <h3>{show.title}</h3>)}
  </div>
);

export default search;
