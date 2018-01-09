
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutUser } from '../../actions';

class CurrentUser extends React.Component {
  render() {
    const currentUser = this.props.currentUser || {};
    return (
      <div className="f2 flex items-center justify-end tr flex-auto">
        <i className="fa fa-user-circle-o ph2 o-60" />
        <span className="f4 pr3 fw2 o-60">{currentUser.displayName}</span>
        <span
          className="f5 pr3 fw2 o-60 pointer"
          onClick={() => this.props.logoutUser()}
        >Logout
        </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.user && state.user.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logoutUser,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser);
