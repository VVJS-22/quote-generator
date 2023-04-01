import React from 'react'
import { useParams } from 'react-router-dom'

const UserGreeting = () => {
    let {name} = useParams();
  return (
    <h1>Welcome {name}</h1>
  )
}

export default UserGreeting