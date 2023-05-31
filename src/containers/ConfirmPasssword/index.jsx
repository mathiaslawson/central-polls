import React, { Component } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import ConfirmPassword from '../../pages/ConfirmPassword';

class ConfirmPasswordContainer extends Component {
  state = {
    email: '',
    error: '',
    success: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email } = this.state;

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);

      this.setState({
        success: `A password reset link has been sent to ${email}. Please check your email.`,
        error: '',
      });
    } catch (error) {
      let errorMessage = 'An error occurred. Please try again later.';

      // Handle specific error cases
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address. Please enter a valid email.';
          break;
        case 'auth/user-not-found':
          errorMessage =
            'No user found with the provided email. Please check your email address.';
          break;
        default:
          console.log(error);
      }

      this.setState({
        error: errorMessage,
        success: '',
      });
    }
  };

  render() {
    const { success, error } = this.state;

    return (
      <ConfirmPassword
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        success={success}
        error={error}
      />
    );
  }
}

export default ConfirmPasswordContainer;
