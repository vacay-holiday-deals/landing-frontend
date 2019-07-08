import React, { useState } from 'react'
import axios from 'axios'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')

  //get the information from the form
  const handleSubmit = () => {
    const user = {
      username: username,
      password: password
    }

    axios
      .post('http://localhost:5000/api/login', user, {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      }) //localhost:5000/api/login

    axios
      .get('http://localhost:5000/api/login')
      .then(res => {
        console.log(res.data)
        setUser(res.data)
      })
      .catch(error => {
        console.log(error)
      })

    const {} = user
  }

  return (
    <div className='login-container'>
      <form action='' className='form' onSubmit={handleSubmit}>
        <div className='form-logo'>
          <img src='/images/logo.png' alt='company logo' />
        </div>
        <p className='form-header'>login to vacay</p>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='username'
            className='form-control'
            value={username}
            onChange={e => {
              setUsername(e.target.value)
            }}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            className='form-control'
            placeholder='password'
            value={password}
            onChange={e => {
              setPassword(e.target.value)
            }}
            required
          />
        </div>

        <div className='button'>
          <button type='submit' className='btn btn-primary btn-block login-btn'>
            login
          </button>
        </div>
        <p className='ml-2'>
          Problem? contact <a href='MAITO:mymbugua@gmail.com'> admin</a>
        </p>
      </form>
    </div>
  )
}

export default Login
