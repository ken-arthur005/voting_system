"use client"
import React from 'react'
import  Breadcrumbs  from './components/Breadcrumb.jsx'
import PresidentVote from './components/PresidentVote.jsx'

const Vote = () => {
  return (
    <div className='bg-black'>
      <Breadcrumbs />
      <PresidentVote/>
    </div>
  )
}

export default Vote