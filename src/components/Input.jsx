import React from 'react'
const InputBox = (props) => {
    return (
    <div className='space-x-3 mt-5'>
        <input 
            className='md:text-xl border rounded-md w-full py-2 px-2 focus:ring focus:ring-blue-500 focus:outline-none'
            type={props.type === 'Email' ? 'email' : 'password'}
            placeholder={props.type} 
            onChange={(e) => {
                if (props.type === 'Email') {
                    props.setEmail(e.target.value)
                } else {
                    props.setPassword(e.target.value)
                }
            }}
        />
    </div>
  )
}

export default InputBox