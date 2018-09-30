// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAPIDetails from './asyncActions';
import Header from './Header';
import Spinner from './Spinner';
// import { render } from 'preact';

class Details extends Component {
  // state = {
  //   apiData: { rating: '' }
  // };
  componentDidMount() {
    if (!this.props.rating) {
      this.props.getAPIData();
    }
  }
  props: {
    show: Show,
    rating: string,
    getAPIData: Function
  };
  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    let ratingComponent;
    if (this.props.rating) {
      ratingComponent = <h3>{this.props.rating}</h3>;
    } else {
      ratingComponent = <Spinner />;
    }
    return (
      <div className="details">
        {/* <pre><code>{JSON.stringify(props, null, 4)}</code></pre> */}
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img src={`/public/img/posters/${poster}`} alt={`poster for ${title}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}

// ownProps: the props passed down from the parent
// to determine which api data we are going to pull out from our redux store
// here we are getting the show(props) from the parent
const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : { apiData: '' };
  return {
    rating: apiData.rating
  };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getAPIData() {
    dispatch(getAPIDetails(ownProps.show.imdbID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
