import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error() {

  const navigate = useNavigate()
  return (
    <div className='container'>
      <div className='text-center mb-5 pb-5 mt-5'>
        <h2 style={{ color: "#0A2457" }}> The page you requested was not found !</h2>
        <h1 style={{ fontSize: '220px', color: "#0A2457" }} className='mt-4'>
          4
          <span style={{ color: "#F5C24C" }}>0</span>
          4
        </h1>
        <button 
        type='button' 
        className='btn px-4 py-2 mt-4' 
        style={{backgroundColor:'#F5C24C', fontSize:'14px',fontWeight:'500', borderRadius:'8px', color:'#0A2457'}}
        onClick = {() => {navigate('/')}}
        >Back to Cheakout</button>
      </div>
    </div>
  )
}