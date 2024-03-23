import React from 'react'
import WorkShopForm from './WorkShopForm'
import CollegeProfile from './CollegeProfile'
import CurrentWorkShopsClg from './CurrentWorkShopsClg'

function UpdatesClg() {
  return (
    <div>
      <>
      <div className='container'>
        <WorkShopForm/>  
        <CurrentWorkShopsClg/>
        <CollegeProfile/>
      </div>
      </>
    </div>
  )
}

export default UpdatesClg
