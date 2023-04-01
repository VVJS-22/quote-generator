import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
    let users = ['Anbu', 'Ajay', 'Akila', 'Aravinth', 'Arun', 'Abi', 'Azhagu'];
  return (
    <div className='flex'>
    {users.map((user, index) => (
        <div key={user}>
        <span>{index+1}&#41;</span><Link to={user}>{user}</Link>
        </div>
    ))}
    </div>
  )
}

export default App