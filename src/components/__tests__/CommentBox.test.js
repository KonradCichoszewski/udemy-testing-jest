import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapper;

beforeEach(() => {
  wrapper = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
  wrapper.unmount();
})

it('has a textarea and 2 buttons', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(2);
});

describe('about text area', () => {
  beforeEach(() => {
    wrapper.find('textarea').simulate('change', {
      target: { value: 'New comment' }
    });
    wrapper.update();
  })

  it('has a textarea that user can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('New comment');
  });

  it('clears out the textarea after submit', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update();

    expect(wrapper.find('textarea').prop('value')).toEqual('');
  })
});