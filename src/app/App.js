import React from 'react';
import { connect } from 'react-redux';

import routes from './routes';
import { saveState } from '../services/cache-service'

class App extends React.Component {

  componentWillReceiveProps(props) {
    saveState(props.state)
  }

  render() {
    return routes;
  }
}

function mapStateToProps(state) {
  return {
    state: state,
    currentUser: state.user && state.user.currentUser,
  };
}

export default connect(mapStateToProps)(App);
