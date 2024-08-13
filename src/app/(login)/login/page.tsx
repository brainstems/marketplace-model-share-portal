import React from 'react'
import Login from '../../components/Login/Login'
import NavBar from '../../components/NavBar/NavBar'

const page = () => {
  return (
    <>
      <NavBar className='!fixed' login={true} />
      <Login/>
    </>
  )
}

export default page