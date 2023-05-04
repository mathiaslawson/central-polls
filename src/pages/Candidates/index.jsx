import React from 'react'
import { store } from '../../store'
import Logout from '../../actions/Logout'

function Candidates() {

 
  return (
    <>
    <p>Welcome {store.getState().auth.user}</p>
    <button
    onClick={()=>{
       store.dispatch(Logout(null))
       window.location.href='./home'
    }}
    >Logout</button>
    </>
  )
}

export default Candidates