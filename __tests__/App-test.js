/* eslint-disable no-undef */
import React from 'react';
import { View, Text } from 'react-native';

import { shallow } from 'enzyme';
import ConveyorDetailsFormRow from '../src/components/ConveyorDetailsFormRow';

describe('ConveyorDetailsFormRow', () => {
  it('Renders a View', () => {
    const title = 'title';
    const wrapper = shallow(<ConveyorDetailsFormRow title={title} item1="item1" item2="item2" />);

    expect(wrapper.hasClass(View));

    expect(wrapper.childAt(0).type()).toEqual(Text);
    expect(wrapper.childAt(1).type()).toEqual(View);
    expect(wrapper.childAt(2).type()).toEqual(View);

    expect(
      wrapper
        .childAt(0)
        .childAt(0)
        .text()
    ).toEqual(title);
  });
});
