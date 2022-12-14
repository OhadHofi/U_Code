import React, {useState, useEffect} from 'react'
const axios = require('axios').default;

export default function Exercise2() {

  const [users, setUsers] = useState([])

  useEffect(() => {
      async function fetch(){
      const res = await axios.get('https://randomuser.me/api/?results=5')
      setUsers(res['data']['results'])
    }
    fetch()
  }, [])





  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {users.map(user => (
          <div key={user.name.first}>
            <span>{user.name.first} {user.name.last}</span>
            <img src={user.picture.thumbnail}/>
          </div>
        ))}

      </div>
    </div>
  )
}