import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapper;

beforeEach(() => {
  let initialState = { comments: ['Comment 1', 'Comment 2'] };

  wrapper = mount(<Root initialState={initialState}><CommentList /></Root>);
});

afterEach(() => {
  wrapper.unmount();
})

it('creates exactly one LI per comment', () => {
  expect(wrapper.find('li').length).toEqual(2);
})

it(`displays LI's values properly on the screen`, () => {
  expect(wrapper.render().text()).toContain('Comment 1');
  expect(wrapper.render().text()).toContain('Comment 2');
})