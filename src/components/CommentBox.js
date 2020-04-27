import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange(e) {
    this.setState({ comment: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <h4>Add a comment</h4>
          <textarea onChange={e => this.handleChange(e)} value={this.state.comment} /><br />
          <button type='submit'>Submit comment</button>
        </form>
        <button id='fetch-comments' onClick={this.props.fetchComments}>Fetch comments</button>
      </div>
    )
  }
}

export default connect(null, actions)(CommentBox);