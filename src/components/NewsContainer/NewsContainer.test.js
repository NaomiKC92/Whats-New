import React from 'react';
import ReactDOM from 'react-dom';
import NewsContainer from './NewsContainer';
import NewsArticle from '../NewsArticle/NewsArticle'
import { shallow } from 'enzyme';

describe('NewsContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<NewsContainer />)
    expect(wrapper).toMatchSnapshot()
  })

})