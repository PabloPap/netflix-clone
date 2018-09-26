// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

// class Search extends React.Component<void, State> {
// constructor(props) {
//   super(props);

//   this.state = {
//     searchTerm: 'this is some sort of debug statement'
//   };

//   // this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
// }

// state = {
//   searchTerm: ''
// };

// props: {
//   shows: Array<Show>
// };
// handleSearchTermChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
//   this.setState({ searchTerm: event.currentTarget.value });
// };

// render() {
const Search = (props: {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows: Array<Show>
}) => (
  <div className="search">
    {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
    <Header showSearch />
    <div>
      {props.shows
        .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);
// }
// }
const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

// for testing purposes
export const Unwrapped = Search;

export default connect(mapStateToProps)(Search);
