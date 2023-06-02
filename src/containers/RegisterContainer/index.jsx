import { useState } from "react";
import Register from "../../pages/Register";
import Firebase from "../../services";
import users from '../../data/users'

const firebaseInstance = new Firebase();

function RegisterContainer() {
  const [details, setDetails] = useState({});
  const [error, setError] = useState('');
  const [usererror, setuserError] = useState('');


//generate random password
  function generateRandomString(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const specialCharacters = '!@#$%^&*()_-+=[]{}|\\:;"\'<>,.?/~`';
  
    const allCharacters = uppercaseLetters + lowercaseLetters + digits + specialCharacters;
  
    let randomString = '';
    while (randomString.length < length) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      randomString += allCharacters[randomIndex];
    }
  
    return randomString.slice(0, length);
  }
  
  // Example usage: generate a random string of length 120
  const randomPassword = generateRandomString(120);
  
  

  const handleChange = (e) => {
    setDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { schoolMail, indexNumber, department } = details;
  
    try {
      // Check if the provided index number and school mail match any user data
      const userExists = users.some((user) => {
        setuserError(`Index number and mail confirmation complete`)
        return user.id === indexNumber && user.mail === schoolMail;
      });
  
      if (!userExists) {
        setuserError(`The index ${indexNumber} does not belong to ${schoolMail}`);
        return;
      }
  
      // Check if user already exists with the same school mail
      const querySnapshot = await firebaseInstance.db
        .collection("users")
        .where("schoolMail", "==", schoolMail)
        .get();
  
      if (!querySnapshot.empty) {
        // User with the same email already exists
        setError("User with the same email already exists");
        return;
      }
  
      // Create new user in Firestore
      const userCredential = await firebaseInstance.signUp(schoolMail, randomPassword);
      const user = userCredential.user;
  
      const departmentFieldValue = department ? department : "";
  
      const presidentVote = false;
      const organizerVote = false;
  
      const userData = {
        indexNumber,
        department: departmentFieldValue,
        schoolMail,
        presidentVote,
        organizerVote,
      };
  
      await firebaseInstance.addUser(user.uid, userData);
  
      // Additional actions after successful registration
      //store.dispatch(Login(userData.schoolMail));
  
      //window.location.href = "/confirm";
    } catch (error) {
      console.log(error);
      setError('An error occurred while processing your registration. Please try again.');
    }
  };
  

  const department = details.department;

  return (
    <Register
      onChange={handleChange}
      onSubmit={handleSubmit}
      department={department}
      error={error}
      usererror = {usererror}
    />
  );
}

export default RegisterContainer;