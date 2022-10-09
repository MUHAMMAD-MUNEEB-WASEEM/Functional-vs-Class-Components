import React, { useState } from 'react'

function FunComp({passion}) {

  const [name, setName] = useState('muneeb');
  const [age, setAge] = useState(22)

  return (
    <div>
      <h1>Function Component</h1>

      <h2>Name is {name}</h2>
      <h2>Age is {age}</h2>
      <h2>Passion is {passion}</h2>


    </div>
    

  )
}

export default FunComp