import { useState } from "react"

const initialState = {
    todos: [],
  };
  

// const[list, setList]= useState([]);
const todoReducers = (state= initialState,action) => {
    switch (action.type) {
        case "ADD_TEXT":
            return { ...state, text: action.payload };
        case "ADD_TODO":
        const{id,data} = action.payload;
        return{
            ...state, 
            todos : [
                ...state.todos,
                {
                    id:id,
                    data:data
                }
            ]
        }
        case "DELETE_TODO":
           const newList= state.todos.filter((elem) => elem.id !== action.id)
            return{
                ...state, 
               todos:newList
            }
            case "EDIT_TODO":
                const updatedTodos = state.todos.map((todo) => {
                    if(todo.id === action.payload.id) {
                        return{...todo, data: action.payload.data}
                    } return todo;
                })
                return{...state,
                    todos: updatedTodos,
                }
             
        default: return state;
    }
}

export default todoReducers