// @flow

import reducers from '../reducers';

test('reducers', () => {
  const state = reducers({ searchTerm: '', apiData: {} }, { type: 'SET_SEARCH_TERM', payload: 'black' });
  expect(state).toEqual({ searchTerm: 'black', apiData: {} });
});

test('ADD_API_DATA', () => {
  const state = reducers(
    { searchTerm: '', apiData: {} },
    {
      type: 'ADD_API_DATA',
      payload: {
        rating: '2.6',
        title: 'Atlanta',
        year: '2008–2013',
        description: 'Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; "Earnest \'Earn\' Marks," an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.',
        poster: 'a.jpg',
        imdbID: 'tt4288182',
        trailer: 'MpEdJ-mmTlY'
      }
    }
  );
  expect(state).toEqual({
    searchTerm: '',
    apiData: {
      tt4288182: {
        rating: '2.6',
        title: 'Atlanta',
        year: '2008–2013',
        description: 'Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; "Earnest \'Earn\' Marks," an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.',
        poster: 'a.jpg',
        imdbID: 'tt4288182',
        trailer: 'MpEdJ-mmTlY'
      }
    }
  });
});

test('ADD_API_DATA with two shows', () => {
  const state = reducers(
    {
      searchTerm: '',
      apiData: {
        tt4270492: {
          rating: '3.5',
          title: 'Billions',
          year: '2016–',
          description: 'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
          poster: 'b.jpg',
          imdbID: 'tt4270492',
          trailer: '_raEUMLL-ZI'
        }
      }
    },
    {
      type: 'ADD_API_DATA',
      payload: {
        rating: '2.2',
        title: 'Black Mirror',
        year: '2011–',
        description: 'A television anthology series that shows the dark side of life and technology.',
        poster: 'bm.jpg',
        imdbID: 'tt2085059',
        trailer: 'jDiYGjp5iFg'
      }
    }
  );
  expect(state).toEqual({
    searchTerm: '',
    apiData: {
      tt4270492: {
        rating: '3.5',
        title: 'Billions',
        year: '2016–',
        description: 'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
        poster: 'b.jpg',
        imdbID: 'tt4270492',
        trailer: '_raEUMLL-ZI'
      },
      tt2085059: {
        rating: '2.2',
        title: 'Black Mirror',
        year: '2011–',
        description: 'A television anthology series that shows the dark side of life and technology.',
        poster: 'bm.jpg',
        imdbID: 'tt2085059',
        trailer: 'jDiYGjp5iFg'
      }
    }
  });
});
