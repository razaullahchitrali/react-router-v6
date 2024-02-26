import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTitle } from "./store/slices/todo";
import Test from "./component/test";

const App = () => {
  const title = useSelector((state) => state.todo.title);
  const fullName = useSelector((state) => state.todo.fullName);
  const completed = useSelector((state) => state.todo.completed);
  const email = useSelector((state) => state.todo.email);
  const address = useSelector((state) => state.todo.address);
  const permanentAddress = useSelector((state) => state.todo.permanentAddress);
  const married = useSelector((state) => state.todo.married);
  const educated = useSelector((state) => state.todo.educated);
  
  const occupation = useSelector((state) => state.todo.occupation);
  const user = useSelector((state) => state.todo.user);
  const heading = useSelector((state) => state.todo.parameter);
  const developer = useSelector((state) => state.todo.developer);
  
  






  return (
    <div className="App">
      {/* <h1>{title || "todo 3" }</h1>
      <h1>{fullName}</h1>
      <p>Completed: {completed ? "Ok":"Not"}</p>
        <p>Email: {email}</p>
        <p>Address: {address}</p>
       <p>permanentAddress:  {permanentAddress}</p>
       <p>Married:  {married ? "True" :  "False"}</p>
       <p>Educated: {educated ? "True" : "False"}</p>
       <p>Occupation: {occupation}</p>
       <h1>{user}</h1>
       <h1>{heading || "I am web developer"}</h1>
       <p>{developer }</p>
       <hr /> */}



      
      <Test />
      
    </div>
  );
};

export default App;
