import React, { Component } from 'react';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange(e) {
    this.setState({ comment: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ comment: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <h4>Add a comment</h4>
          <textarea onChange={e => this.handleChange(e)} value={this.state.comment} />
          <button type='submit'>Submit comment</button>
        </form>
      </div>
    )
  }
}

export default CommentBox;