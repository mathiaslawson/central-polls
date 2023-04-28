import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {Login as LoginAction} from '../../actions';
import { withFirebase } from '../../services/index';

import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

import Login from '../../pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// different method
import {signInWithEmailAndPassword} from 'firebase/auth'


class LoginInContainer extends Component {
  state = {
    email: '',
    password: '',
    error: null,
    loading: false,
  };


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state.email, this.state.password)

    const { firebase, SignInAction } = this.props;
    console.log(this.props)
    const { email, password } = this.state;

    firebase
      .signIn(email, password)
      .then(success => {
        const user = success.user;

        console.log('sign in')
       
     const showToastMessage = () => {
          toast.success('Logging In', {
              position: toast.POSITION.TOP_RIGHT
          });
      };   

      showToastMessage()

      return firebase.getUser(user.uid)
      })
      .then( querySnapshot => {
        const userData = querySnapshot.data()        
        SignInAction(userData);
  
        
      })
      .catch(error => {
      const errorMessage = error.message;  
  
      this.setState({
        loading: false,
        error: 
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="filled" severity="error">
              {errorMessage}
            </Alert>
          </Stack>       
        });
      });
  };

  render() {

    return (
      <>
        <Login
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ToastContainer />
      </>
    )
  }
}

export default compose(
  connect(
    null,
    { LoginAction }
  ),
  withFirebase
)(LoginInContainer);
