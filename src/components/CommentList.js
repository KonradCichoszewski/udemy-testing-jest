import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

  listComments() {
    let commentKey = 0;
    return (
      this.props.comments.map((comment) => {
        commentKey++;
        return (<li key={commentKey}>{comment}</li>)
      })
    )
  }

  render() {
    return (
      <div>
        <h4>Comment List</h4>
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