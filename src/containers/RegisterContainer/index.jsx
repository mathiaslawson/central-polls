import { useState } from "react";
import Register from "../../pages/Register";
import { Login } from "../../actions";
import { withFirebase } from "../../services";
import { compose } from "redux";
import { connect } from "react-redux";
import Firebase from "../../services";

const firebaseInstance = new Firebase();

function RegisterContainer({ Login }) {
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { schoolMail, password, indexNumber, department } = details;

    try {
      // Check if user already exists with the same school mail
      const querySnapshot = await firebaseInstance.db
        .collection("users")
        .where("schoolMail", "==", schoolMail)
        .get();

      if (!querySnapshot.empty) {
        // User with same email already exists
        setError("User with same email already exists");
        return;
      }

      // Create new user in Firestore
      const userCredential = await firebaseInstance.signUp(schoolMail, password);
      const user = userCredential.user;

      const departmentFieldValue = department ? department : "";

      const userData = {
        indexNumber,
        department: departmentFieldValue,
        schoolMail,
      };

    //  await firebaseInstance.addUser(user.uid, userData);

      // Send email verification
      await user.sendEmailVerification();

      // Set message for user to verify their email
      setError(`Verification email sent to ${schoolMail}. Please verify your email before logging in.`);

    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const department = details.department;

  return (
    <Register
      onChange={handleChange}
      onSubmit={handleSubmit}
      department={department}
      error={error}
    />
  );
}

export default compose(connect(null, { Login }), withFirebase)(RegisterContainer);
