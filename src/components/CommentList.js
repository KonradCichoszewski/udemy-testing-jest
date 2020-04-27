import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

  listComments() {
    return (
      this.props.comments.map((comment) =>
        <li key={comment}>{comment}</li>)
    )
  }

  render() {
    return (
      <div>
        <ul>
          {this.listComments()}
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(state) {
  return ({ comments: state.comments });
}

export default connect(mapDispatchToProps)(CommentList);