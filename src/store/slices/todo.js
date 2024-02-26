import { createSlice } from "@reduxjs/toolkit";
 
const todoSlice = createSlice({
    name:"todo",
    initialState:{
        title:"Todo 4",
        fullName:"Raza ullah",
        completed: true,
        email:"Razaullah@gmail.com",
        address:"Torkhow werkup chitral",
        permanentAddress:"Qissa khwani bazar peshawar",
        married: false,
        educated: true,
        occupation: "student",
        user: "mateen",
        heading: "this is object",
        developer:"Abdul Mateen is a heavy coder in the world",
            
        

    },
    reducers:{
        updateTitle(state,{payload}){
            state.title=payload
        },
        updateTodoStatus(state,action){
         state.completed = !state.completed
        }
    }

});

export const {updateTitle,updateTodoStatus} = todoSlice.actions;
export default todoSlice.reducer;
