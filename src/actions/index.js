import axios from 'axios';

import { ADD_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment
  }
}

export function fetchComments() {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');

  return {
    type: FETCH_COMMENTS,
    payload: response
  }
}

export function changeAuth() {
  return {
    type: CHANGE_AUTH
  }
}