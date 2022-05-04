import { useState } from "react"

const initialState = {
    list: []
}

// const[list, setList]= useState([]);
const todoReducers = (state= initialState,action) => {
    switch (action.type) {
        case "ADD_TODO":
        const{id,data} = action.payload;
        return{
            ...state, 
            list : [
                ...state.list,
                {
                    id:id,
                    data:data
                }
            ]
        }
        case "DELETE_TODO":
           const newList= state.list.filter((elem) => elem.id !== action.id)
            return{
                ...state, 
               list:newList
            }
        default: return state;
    }
}

export default todoReducers