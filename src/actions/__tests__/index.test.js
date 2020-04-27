import { ADD_COMMENT } from 'actions/types';
import { addComment } from 'actions/index';

describe('addComment', () => {
  it('has a type of "ADD_COMMENT"', () => {
    const action = addComment();
    expect(action.type).toEqual(ADD_COMMENT);
  });

  it('produces an action with a proper payload', () => {
    const action = addComment('New comment');
    expect(action.payload).toEqual('New comment');
  });
});