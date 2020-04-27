import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import App from 'components/App';
import Root from 'Root';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Comment 1' }, { name: 'Comment 2' }, { name: 'Comment 3' }]
  })
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch and display a list of comments', (done) => {
  const wrapper = mount(<Root><App /></Root>);

  wrapper.find('#fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find('li').length).toEqual(3);
    done()
  });
});