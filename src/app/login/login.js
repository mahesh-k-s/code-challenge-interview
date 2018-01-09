import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/index';

class LoginPage extends Component {
  handleFormSubmit(e) {
    e.preventDefault();
    const user = {
      userId: this.userId.value,
      password: this.password.value,
    };
    this.props.loginUser(user);
  }

  render() {
    if (this.props.currentUser != null) {
      return <Redirect to="/media" />;
    }
    return (
      <div id="login-container" className="flex flex-column items-center justify-center w-100 h-100">
        <div className="relative mb6 pa5">
          <div className="absolute left-0 top-0 w-100 h-100 primary o-80 br3 ba divider-ba z-1" />
          <form className="relative flex flex-column z-2">
            <div className="mh6 mb4 f3 fw2 primary-contrast">iTunes&trade; Login</div>
            <div className="error-text tc h2 mt2">{this.props.loginError && this.props.currentUser == null && this.props.loginError}</div>
            <input
              ref={(ref) => { this.userId = ref; }}
              type="text"
              placeholder="Enter iTunes User Id"
              className="ba divider-contrast-ba pv2 ph3 ma2 br2"
            />
            <input
              ref={(ref) => { this.password = ref; }}
              type="password"
              placeholder="Enter iTunes Password"
              className="ba divider-contrast-ba pv2 ph3 ma2 br2"
            />
            <button
              type="submit"
              className="bn pv2 ph3 ma2 br2 accent"
              onClick={event => this.handleFormSubmit(event)}
            > Sign In
            </button>
          </form>
          <div className="primary-contrast tc mt3 z-3 relative o-60 f6 fw3">All rights reserved @2018. Mahesh K S</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.user && state.user.currentUser,
    loginError: state.user && state.user.loginError,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loginUser,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
