import React, { useContext } from "react"
import logo from "../assests/logotest.png"
import Button from "../components/buttons/Button"
import { UserContext } from "../context/UserContext"

function Home(props) {
  const { handleSubmit, setPassword, setEmail, passwordError, emailError } =
    useContext(UserContext)

  return (
    <div className='sign-in-container'>
      <div className='logo-container'>
        <img src={logo} alt='' />
      </div>
      <form onSubmit={handleSubmit}>
        <div className='form-element'>
          <label htmlFor='email'>Email Address</label>
          {emailError && <div className='errorMessage'>{emailError}</div>}
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter Your Email Here...'
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className='form-element'>
          <label htmlFor='pass'>Password</label>
          {passwordError && <div className='errorMessage'>{passwordError}</div>}
          <input
            type='password'
            id='pass'
            name='pass'
            placeholder='Enter Your Password Here...'
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className='form-element form-btn'>
          <Button varr='primary' text='login' type='submit' />
        </div>
      </form>
    </div>
  )
}

export default Home
