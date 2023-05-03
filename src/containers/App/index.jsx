import { Component, Fragment } from 'react';
import Routes from '../../routes';
import { Login } from '../../actions';
import {compose } from 'redux'
import {connect} from 'react-redux'
import { withFirebase } from '../../services';


class App extends Component {
  render() {

    return (
     
      <Fragment>
        <Routes />
      </Fragment>
     
    );
  }
}

const mapStateToProps = state =>{
  return {user: state.auth.user};
}


export default compose(
  connect(
    mapStateToProps,
    { Login }
  ),
  withFirebase
)(App);

