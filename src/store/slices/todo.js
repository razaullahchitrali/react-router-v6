import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    title: "Todo 4",
    fullName: "Raza ullah",
    completed: true,
    email: "Razaullah@gmail.com",
    address: "Torkhow werkup chitral",
    permanentAddress: "Qissa khwani bazar peshawar",
    married: false,
    educated: true,
    occupation: "student",
    user: "Raza",
    heading: "this is object",
    developer: "Abdul Mateen is a heavy coder in the world",
    workingProgress:"Nill",
    hobbies: [
      "Drawing",
      "Reading",
      "Cooking",
      "Gardening",
      "Photography",
      "Yoga",
      "Programming",
      "Playing an Instrument",
      "Writing",
      "Hiking",
    ],
    subjects: [
      "maths",
      "english",
      "urdu",
      "physics",
      "islamyat",
      "chemistry",
      "biology",
      "social",
    ],
    studentsName: [
      "Raza",
      "Salman",
      "Hasan",
      "Fazal",
      "Zaman",
      "Jmal",
      "Faiz ullah",
      "gulbaz",
    ],
   detail: {
      contact: "034156723",
      homeNumber: "3301",
      gmailPassward: "438743847",
      facebookCode: "jahnnd12335",
      bankAccount: "raza12344",
      registrationNumber: "14429",
    },
    prayerNames:["fajar","Zuhar","Asar","Maghrib","Isha"],
    persnalDetails:{
      fname:["raza","umar","fakhar",234,false],
      lastName:"ullah",
      occupation:"student",
      education:["Grduate from Karachi University"],
      families:"1 brother and sister",
      hobbies:"I like playing cricket",
 
    },
    timeTable:{
      class1 : "9am to 10am",
      class2 : "10am to 11am",
      class3 : "11am to 12pm",
      class4 : "12pm to 2pm",
    },
   results:[ 78,95,67,89,90,45,90],
  },
  reducers: {
    updateTitle(state, { payload }) {
      state.title = payload;
    },
    updatefullName(state, { payload }) {
      state.fullName = payload;
    },
    updateCompleted(state) {
      state.completed = !state.completed;
    },

    updateEmail(state, { payload }) {
      state.email = payload;
    },
    updateAddress(state,{ payload}){
        state.address = payload;
    },
    updateMarried(state){
        state.married = !state.married ;
    },
    updateEducated(state){
        state.educated = !state. educated;
    },
    updateUser(state,{payload}){
        state.user= payload
    },
    updateheading(state,{payload}){
       state.heading = payload
    },
    updateworkingProgress(state,{payload}){
      state.workingProgress = payload
    },
    
  },
});

export const {
  updateTitle,
  updateTodoStatus,
  updatefullName,
  updateCompleted,
  updateEmail,
  updateAddress,
  updateMarried,
   updateEducated,
   updateUser,
   updateheading,
   updateworkingProgress,
} = todoSlice.actions;
export default todoSlice.reducer;
