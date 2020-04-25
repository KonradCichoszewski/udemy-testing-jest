import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapper;

beforeEach(() => {
    wrapper = mount(<CommentBox />);
  });

afterEach(() => {
    wrapper.unmount();
})

it('has a textarea and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
});

it('has a textarea that user can type in', () => {
    wrapper.find('textarea').simulate('change', {
        target: { value: 'New comment'}});
    wrapper.update();

    expect(wrapper.find('textarea').prop('value')).toEqual('New comment');
});

it('clears out the textarea after submit', () => {
    wrapper.find('textarea').simulate('change', {
        target: { value: 'New comment'}});
    wrapper.update();
    wrapper.find('form').simulate('submit');
    wrapper.update();

    expect(wrapper.find('textarea').prop('value')).toEqual('');
})