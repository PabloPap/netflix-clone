// @flow

import * as React from 'react';
import ShowCard from './ShowCard';

class Search extends React.Component<void, State> {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     searchTerm: 'this is some sort of debug statement'
  //   };

  //   // this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  // }
  state = {
    searchTerm: ''
  };
  props: {
    shows: Array<Show>
  };
  handleSearchTermChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.currentTarget.value });
  };

  render() {
    return (
      <div className="search">
        {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
        <header>
          <h1>svideo</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
