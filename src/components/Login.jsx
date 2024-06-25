import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import InputBox from './Input'
import DropdownButton from './DropdownButton'
import Alert from './Alert'
import { DNA } from 'react-loader-spinner'
import '../App.css'

const LoginPage = (props) => {
  const [rememberClicked, setRememberClicked] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('Options')
  const [loginClicked, setLoginClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const doLogin = async (e) => {
    e.preventDefault();
    setLoginClicked(true)
    setIsLoading(true)
    if (role === 'Options' || email === '' || password === '') {
      setIsLoading(false)
      return
    }
    if (rememberClicked) {
      localStorage.setItem('email', email)
      localStorage.setItem('password', password)
      localStorage.setItem('role', role)
    }
    try{
      const response = await fetch('http://localhost:8000/send_otp',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          role: role
        })
      })
      if(!response.ok){
        console.log("Response was not Okay!")
      }
      const data = await response.json()
      if(data.otp){
        localStorage.setItem('role', role)
        navigate('/otp', { state: { otp: data.otp, email } });
      } else {
        console.log(data.message)
      }
    } catch (error) {
      console.log(error.message)
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <form className="max-w-full h-screen bg-[url('./assets/6.png')] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center" onSubmit={doLogin}>
        { (role === 'Options' || email === '' || password === '') && loginClicked ? <Alert header='Login Error' content='Please select a role, Enter Email, Password and then login!' /> : null}
        <p className='md:text-2xl text-xl text-white'>Hi Login to your Dashboard!</p>
        <div className='container flex flex-col justify-center items-center'>
          <div className='flex flex-row mt-5 items-center md:space-x-4 space-x-2 mb-2'>
            <p className='md:text-2xl text-white'>Login as</p>
            <DropdownButton role={role} setRole={setRole} />
          </div>
          <InputBox type="Email" email={email} setEmail={setEmail}/>
          <InputBox type="Password" password={password} setPassword={setPassword}/>
        </div>
        <button type='submit' className='mt-5 md:text-xl bg-blue-500 transition-all duration-300 hover:bg-blue-700 hover:scale-105 text-white tracking-wider py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Login</button>
        <div className='flex flex-row items-center mt-5'>
          <input type='checkbox' onClick={() => setRememberClicked(!rememberClicked)} className='mr-2 w-5 h-5 rounded-lg custom-checkbox transition-all duration-300 hover:scale-125' />
          <p className='text-lg text-white'>Remember Me</p>
        </div>
        <a className="underline text-white mt-5 sm:text-xl" href="#">Forget password?</a>
        {isLoading ? <DNA className='mt-10' color='#00BFFF' height={150} width={150} /> : null}
    </form>
    
  )
}

export default LoginPage