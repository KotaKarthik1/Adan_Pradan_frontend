import React from 'react'
import { Container } from 'react-bootstrap'
import WorkShopForm from './WorkShopForm'
import CollegeProfile from './CollegeProfile'
import CurrentWorkShopsClg from './CurrentWorkShopsClg'

function UpdatesClg() {
  return (
    <div>
      <>
      <div className='container'>
        <WorkShopForm/>  
        <CollegeProfile/>
        <CurrentWorkShopsClg/>
      </div>
      </>
    </div>
  )
}

export default UpdatesClg
