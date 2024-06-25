import {React, useState} from 'react'
import { useLocation } from 'react-router-dom';
import Alert from './Alert';
import SuccessLogin from './SuccessLogin';
const Otp = (props) => {
  const location = useLocation();
  const { otp } = location.state || { otp: '', email: ''}
  const [enteredOtp, setEnteredOtp] = useState('')
  const [otpMatch, setOtpMatch] = useState(false)
  const [submitClicked, setSubmitClicked] = useState(false)
  const handleSubmit = (e) => {
    setSubmitClicked(true)
    e.preventDefault()
    if(otp === parseInt(enteredOtp)){
      setOtpMatch(true)
    } else {
      setOtpMatch(false)
    }
  }
  return (
    <form className="max-w-full h-screen bg-black flex flex-col items-center justify-center" onSubmit={handleSubmit}>
      {submitClicked && (otpMatch === false || enteredOtp.trim() === '') && (<Alert header="One Time Password Error" content="OTP did not match!" />)}
      {submitClicked && otpMatch && (<SuccessLogin header={"Login Successful!"} content={"You will be redirected to Dashboard now!"} />)}
        <p className='text-white font-sans md:text-3xl sm:text-2xl text-xl'>Enter your One Time Password (OTP)</p>
        <div className='flex flex-row mt-5 items-center justify-center space-x-2 p-10 lg:w-5/12 w-1/2 rounded-md gap-4'>
          <input onChange={(e) => setEnteredOtp(e.target.value)} type='text' placeholder='Enter OTP' className='p-2 border-b-2 focus-within:border-blue-500 outline-none bg-black text-white w-96' />
          <button type='submit' className='bg-blue-500 text-white rounded-md p-3 hover:scale-110 transition-all duration-300'>Submit</button>
        </div>
    </form>
  )
}

export default Otp