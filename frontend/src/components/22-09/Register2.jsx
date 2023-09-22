import React, { useState } from 'react'

const Register2 = () => {
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });

  // console.log(userData,"userdata")

  const handleChange = (event) => {
    console.log(event.target.value, "value", event.target.name, "name")
  }

  const sendDataToBackend = () => {
    alert("Data submitted to backend..")
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={sendDataToBackend}>
        <label>Name :</label><br />
        <input name='name' type='text' onChange={handleChange} /> <br />
        <label>Email :</label><br />
        <input name='email' type='email' onChange={handleChange} /> <br />
        <label>Password :</label><br />
        <input name='password' type='password' onChange={handleChange} /> <br />
        <input type='submit' /> <br />
      </form>
    </div>
  )
}

export default Register2