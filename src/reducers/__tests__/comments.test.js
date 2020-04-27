import { ADD_COMMENT } from 'actions/types';
import commentsReducer from 'reducers/comments';

it('handles properly the action of type ADD_COMMENT', () => {
  const action = {
    type: ADD_COMMENT,
    payload: 'New comment'
  }

  const updatedState = commentsReducer([], action);

  expect(updatedState).toEqual(['New comment']);
})

it('handles an action of unknown type without error', () => {
  const updatedState = commentsReducer([], { type: 'unknownType' });
  expect(updatedState).toEqual([]);
})