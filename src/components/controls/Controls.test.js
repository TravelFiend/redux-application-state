import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls component', () => {
  let wrapper;
  beforeEach(() => {
    const actions = [
      { name: 'DO_STUFF', text: 'stuff' },
      { name: 'other' }
    ];

    wrapper = shallow(<Controls
      actions={actions} />);
  });

  it('renders Controls', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
  
