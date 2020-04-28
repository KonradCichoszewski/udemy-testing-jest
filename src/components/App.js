import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

import * as actions from 'actions';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends Component {
  renderHeader() {
    return (
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/post'>Add comment</Link></li>
        <li>{this.renderButton()}</li>
      </ul>
    )
  }

  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={this.props.changeAuth}>Sign out</button>
      )
    } else {
      return (
        <button onClick={this.props.changeAuth}>Sign in</button>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path='/post' component={CommentBox} />
        <Route exact path='/' component={CommentList} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({ auth: state.auth })
}

export default connect(mapStateToProps, actions)(App);