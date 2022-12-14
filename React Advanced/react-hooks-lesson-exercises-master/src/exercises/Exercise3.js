import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchExpenses } from '../data/utils'

export default function Exercise3() {

  const [month ,setMonth] = useState(0)
  const [expenses, setExpenses] = useState([])

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const handleMonthInput = (event) => {
    setMonth(event.target.value)
  }



  useEffect(() => {
    async function fetch(){
      const res = await fetchExpenses(month)
      setExpenses(res)
    }
    fetch()
  }, [month])

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
        <select onChange={handleMonthInput}>
          {months.map((month, i) => <option key={i} value={i}>{month}</option>)}
        </select>
        <div>
          {expenses.map(expense => (<div>{expense.item} {expense.date} {expense.amount}</div>))}
        </div>
      </div>
    </div>
  )
}