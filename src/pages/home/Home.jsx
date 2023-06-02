import React from 'react'
import UserContent from '../topfolder/UserContent'
import ExpenseList from '../../components/expense-list/ExpenseList'

const Home = () => {
  return (
    <div className='home mx-auto'>
        <UserContent />
        <ExpenseList />
    </div>
  )
}

export default Home