import React, { useState }from 'react'

export default function SpotCheck1() {
  const [pageNumber, setPageNumber] = useState(1)
  
  const increase = () => setPageNumber(pageNumber + 1)
  const decrease = () => setPageNumber(pageNumber - 1)
  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        <div>{pageNumber}</div>
        <button onClick={increase}>next</button>
        <button onClick={decrease}>prev</button>
      </div>
    </div>
  )
}