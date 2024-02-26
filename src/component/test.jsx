import React from 'react'
import { useSelector } from 'react-redux';


const Test = () => {
  const title = useSelector((state) => state.todo.title);
  const fullName = useSelector((state) => state.todo.fullName);
  const completed =useSelector((state) => state.todo.management);
  const email = useSelector((state) => state.todo.email);
  const address = useSelector((state) => state.todo.address);

  return (
    <div>
      <h1>{title}</h1>
      <h2>{fullName}</h2>
      <h3>Completed: {completed ? "true": "False"}</h3>
      <h3>Email: {email ? "true":"false"}</h3>
      <h3>Address:{address}</h3>

    </div>
  )
}

export default Test
