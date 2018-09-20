import React from 'react';
// import renderer from 'react-test-renderer';
// cannot have renderer and enzyme in the same import
import { shallow } from 'enzyme';
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

test('Search renders correctly', () => {
  // const component = renderer.create(<Search />);
  // const tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  const component = shallow(<Search shows={preload.shows} />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should render correct amount of shows based on search term', () => {
  const searchword = 'black';
  const component = shallow(<Search shows={preload.shows} />);
  component.find('input').simulate('change', { target: { value: searchword } });
  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchword.toUpperCase()) >= 0
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});
