import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTitle,
  updatefullName,
  updateCompleted,
  updateEmail,
  updateAddress,
  updateMarried,
  updateEducated,
  updateUser,
  updateheading, 
  updateworkingProgress, 
} from "../store/slices/todo";

//String form//
const Test = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.todo.title);
  const fullName = useSelector((state) => state.todo.fullName);
  const completed = useSelector((state) => state.todo.completed);
  const email = useSelector((state) => state.todo.email);
  const address = useSelector((state) => state.todo.address);
  const developer = useSelector((state) => state.todo.developer);
  const permanentAddress = useSelector((state) => state.todo.permanentaddress);
  const married = useSelector((state) => state.todo.married);
  const educated = useSelector((state) => state.todo.educated);
  const user = useSelector((state) => state.todo.user);
  const heading = useSelector((state) => state.todo.heading);
  const  workingProgress = useSelector((state) => state.todo. workingProgress);

  // * In Form of Array //
  const hobbies = useSelector((state) => state.todo.hobbies);
  const subjects = useSelector((state) => state.todo.subjects);
  const studentsName = useSelector((state) => state.todo.studentsName);
  const prayerNames = useSelector ((state)=> state.todo.prayerNames);
 


  // ** Object Form ** //

  const contact = useSelector((state) => state.todo.detail.contact);
  const homeNumber = useSelector((state) => state.todo.detail.homeNumber);
  const gmailPassward = useSelector((state) => state.todo.detail.gmailPassward);
  const facebookCode = useSelector((state) => state.todo.detail.facebokCode);
  const bankAccount = useSelector((state) => state.todo.detail.bankAccounts);
  const registrationNumber = useSelector((state) => state.todo.detail.registrationNumber );
  const timeTable = useSelector ((state)=> state.todo.timeTable.class3);
  const results =useSelector ((state)=> state.todo.results);

  

  
 

  const education = useSelector((state) => state.todo.persnalDetails.education);
  const fname = useSelector((state) => state.todo.persnalDetails.fname);
  



  const handleTitle = () => {
    dispatch(updateTitle("javacript"));
  };
  const handlefullName = () => {
    dispatch(updatefullName("Rizwan"));
  };

  const handleCompleted = () => {
    dispatch(updateCompleted());
  };
 

  const handleEmail = () => {
    dispatch(updateEmail("rrizvi@gmail.com"));
  };
  const handleAddress = () => {
    dispatch(updateAddress("Muhallah bazdaran Qissa khwani bazar peshawar"));
  };
  const handleMarried = () => {
    dispatch(updateMarried());
  };
  const handleEducated = () => {
    dispatch(updateEducated());
  };
  const handleUser = () => {
    dispatch(updateUser("Tahir"));
  };
  const handleheading = () => {
    dispatch(updateheading("Management"));
  };
  const handleworkingProgres =() => {
    dispatch(updateworkingProgress("OutStanding"));
 
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleTitle}>Update Title</button>

      <h2>{fullName}</h2>
      <button onClick={handlefullName}>Update fullName</button>

      <h3>Completed: {completed ? "true" : "False"}</h3>
      <button onClick={handleCompleted}>Update completed</button>

      <h3>Email: {email}</h3>
      <button onClick={handleEmail}>Update Email</button>

      <h3>Address: {address}</h3>
      <button onClick={handleAddress}>Update Address</button>
      <h2>Developer: {developer}</h2>
      <h2>ParmanentAddress: {permanentAddress || "Nill"}</h2>

      <h1>Education:{educated ? "true" : "False"}</h1>
      <button onClick={handleEducated}>UpdateEducated</button>

      <h2>Married: {married ? "true" : "false"}</h2>
      <button onClick={handleMarried}>UpdateMarried</button>

      <h1>User: {user}</h1>
      <button onClick={handleUser}>UpdateUser</button>

      <h1>Heading: {heading}</h1>
      <button onClick={handleheading}>UpdateHeading</button>

      <h2>WorkingProgress: {workingProgress}</h2>
      <button onClick={handleworkingProgres}>UpdateWorkingProgress</button>

      <h1>Hobbies</h1>
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>

      <h1>Subjects</h1>
      <ul>
        {subjects.map((subjects) => (
          <li>{subjects}</li>
        ))}
      </ul>

      <h1>studentsName</h1>
      <ul>
        {studentsName.map((studentName) => (
          <li>{studentName}</li>
        ))}
      </ul>

      <h1>prayerNames</h1>
      <ul>{prayerNames.map((prayerNames)=>(
        <li>{prayerNames}</li>
      ))}
        </ul>

      <h1>persnalDetails</h1>
      <ul>
        {fname.map((persnalDetail) => (
          <li>{persnalDetail}</li>
        ))}
      </ul>
     
      <h2>Education</h2>
      <ul>
      {education.map((persnalDetails) => (
        <li>{persnalDetails}</li>
      ))}
      </ul>

      <h1>Contact: {contact}</h1>
      <h2>TimeTable: {timeTable}</h2>
      <h2>Results</h2>
      <ul>
        {results.map((results)=>(
          <li>{results}</li>
        ))};
      </ul>
      

      <h1>BankAccount: {bankAccount ? "null" : "00000000"}</h1>
      <h1>HomeNumber: {homeNumber}</h1>
      <h1>GmailPassward: {gmailPassward}</h1>
      <h1>Facebook: {facebookCode || "youtube"}</h1>
      <h1>RegistrationNumber: {registrationNumber}</h1>
    </div>
  );
};

export default Test;
