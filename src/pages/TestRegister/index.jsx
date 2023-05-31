import React, {useEffect} from "react";
import Firebase from "../../services";

function VerifyEmail({currentUser}) {
 
   useEffect(()=>{

   console.log(currentUser)
   }, [])


  return (
    <div>
      <h2>Email Verification</h2>
      <p>
        Thank you for registering! An email has been sent to your email address
        with a verification link. Please check your inbox and click on the
        verification link to complete the registration process.
      </p>
    </div>
  );
}

export default VerifyEmail;
