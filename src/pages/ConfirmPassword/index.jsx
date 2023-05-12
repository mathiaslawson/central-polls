import React from 'react'

function index({onSubmit, onChange, error, success}) {
  return (
    <>
    
    <form onSubmit={onSubmit}>
      <input
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="Work Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      onChange= {onChange}    
      >
      </input>
      <button>Submit</button>
      {error}
      {success}
      </form>
    </>
  )
}

export default index