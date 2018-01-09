import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function mapStateToProps(state) {
  return {
    currentUser: state.user && state.user.currentUser,
  };
}

const securePage = Page => connect(mapStateToProps)((props) => {
  if (props.currentUser == null) return <Redirect to="/login" />;
  return <Page {...props} />;
});

export default securePage;
