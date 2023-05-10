import { Component, Fragment } from 'react';
import Routes from '../../routes';
import { Login } from '../../actions';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirebase } from '../../services';
import Navbar from '../../components/Navbar';
import MainLoader from '../../components/MainLoader'


class App extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    // Simulate a delay for 4 seconds before loading the app
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 4000);
  }

  render() {
    const { isLoading } = this.state;
    const { user } = this.props;

    // Show the loader until the app is loaded
    if (isLoading) {
      return <MainLoader />;
    }

    return (
      <Fragment>
        <Navbar />
        <Routes />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.auth.user };
}

export default compose(
  connect(
    mapStateToProps,
    { Login }
  ),
  withFirebase
)(App);
