import React, {Component} from 'react'
import { compose } from 'redux';
import {connect} from 'react-redux'
import {Login} from '../../actions'
import {withFirebase} from '../../services/index'
import ConfirmPassword from '../../pages/ConfirmPassword'
import {getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup, sendSignInLinkToEmail, sendEmailVerification} from 'firebase/auth'
import {doc, setDoc, getDoc, serverTimestamp} from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';

class ConfirmPasswordContainer extends Component{
    state = {
        email: '',
        error: ``,
        success: ``
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) =>{
        e.preventDefault() 

        const {email} = this.state
        console.log(email)
        
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)
            
            this.setState({
                success: `Reset link sent to ${email}`
            })
          } catch (error) {
            console.log(error)
            this.setState({
                error: `Email not Sent, Try again after some few minutes`
            })
          }
    }

   

    render(){
        return <ConfirmPassword onChange={this.handleChange} onSubmit={this.handleSubmit}  success={this.state.success} error={this.state.error}/>
    }
}

export default compose(
    connect(
        null, {Login}
    ), withFirebase
)(ConfirmPasswordContainer)