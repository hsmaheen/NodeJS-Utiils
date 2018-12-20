import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Parent from './Parent';
import Child from './Child/Child';

configure({ adapter: new Adapter() });

describe('<Parent/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Parent />);
  });

  it('should render 5 childs', () => {
    wrapper.setProps({ count: 5 });
    expect(wrapper.find(Child)).to.have.length(5);
  });

  it('should render 3 childs', () => {
    wrapper.setProps({ count: 3 });
    expect(wrapper.find(Child)).to.have.length(3);
  });
});
