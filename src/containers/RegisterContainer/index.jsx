import { useState } from 'react'
import Register from '../../pages/Register'
import { Login } from '../../actions'
import { withFirebase } from '../../services'
import {compose} from 'redux'
import { connect } from 'react-redux'
import Firebase from '../../services'


function RegisterContainer() {
  const [details, setDetails] = useState({
  
  })

  const handleChange = (e) =>{
   setDetails(prevState => ({
       ...prevState, 
       [e.target.name]: e.target.value
   }))

  }

  const handleSubmit = async (e) =>{
      e.preventDefault()
      console.log(details)

      
      const firebase = new Firebase()
      console.log(firebase)
 
       const {schoolMail, password, indexNumber, department} = details
      //  const auth = getAuth(firebase.auth)

      try {
         const userCrential = await firebase.signUp(schoolMail, password)
         const user = userCrential.user
         console.log(user)

         // add user to db & create user collection if not available
         const userData = {
            indexNumber, 
            department,
            schoolMail, 
         }

         firebase.addUser(user.uid, userData)

       //  store.dispatch(Login(userData.schoolMail))
         

         // .then(()=>(firebase.auth.currentUser.uid))
         // .then(querySnapshot =>{
         //    const userData = querySnapshot.data()
         //    console.log(userData)
         //    Login(userData)
         // })
        

      //  window.location.href = './candidates';

      }catch(error){
         console.log(error)
      }
  
  }



  return (
     <>
        <Register onChange={handleChange} onSubmit={handleSubmit}/>
     </>
  )
}


export default compose (
   connect(
      null, {Login}
   ),withFirebase
)(RegisterContainer)