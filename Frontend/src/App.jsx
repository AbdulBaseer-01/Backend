import React, { useEffect, useState } from 'react';
import axios from 'axios'

const App = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    try{
      axios.get('/api/jokes')
      .then((resposne) => {
        setJokes(resposne.data)
      })
    }catch(error){
      console.log(error.message)
    }
  }, [])
  return (
    <div>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((a) => (
          <div key={a.id}>
            <p>{a.joke}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App