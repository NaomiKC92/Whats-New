import React from 'react';
import ReactDOM from 'react-dom';
import NewsArticle from './NewsArticle';
import { shallow } from 'enzyme';

describe('NewsArticle', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<NewsArticle />)
    expect(wrapper).toMatchSnapshot()
  })
})