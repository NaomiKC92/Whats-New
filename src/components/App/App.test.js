import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper
  beforeEach( () => {
    wrapper = shallow(<App />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call the filterNews property', () => {
    const news = [
      {headline:"Today's weather", description: 'Is a shocking -10 degrees'},
      {headline:"No civil war in Canada", description: 'Everything is great here'}
    ]
    const expected =[{headline:"Today's weather", description: 'Is a shocking -10 degrees'}]

    wrapper.setState({current: news})
    
    wrapper.instance().filterNews('weather')
    
    expect(wrapper.state('current')).toEqual(expected)
  })

})

