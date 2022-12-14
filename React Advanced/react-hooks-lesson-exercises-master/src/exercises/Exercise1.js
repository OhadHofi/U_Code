import React, { useState } from 'react'

export default function Exercise1() {
  const [form, setForm] = useState({name: '', city: '', country: ''})


  const handleInput = function(event){
    const target = event.target
    let value = target.value
    let name = target.name
    setForm({...form, [name]: value})
  }

  const countries = ['united states', 'china', 'united kingdom', 'australia']
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>  
      <div className="exercise" id="ex-1">
        <input name="name" placeholder='name' value={form.name} onChange={handleInput}></input>
        <input name='city' placeholder='city' value={form.city} onChange={handleInput}></input>
        <select value={form.country} name='country' onChange={handleInput}>
          {countries.map(country => <option key={country} value={country}>{country}</option>)}
        </select>
      </div>
    </div>
  )
}