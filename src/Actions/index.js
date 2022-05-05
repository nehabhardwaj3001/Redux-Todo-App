import { nanoid } from "nanoid"

export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload : {
            id: nanoid(),
            data:data
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
            id
        // payload:
    }
}


export const EditTodo = (todos) => ({
    type: "EDIT_TODO",
 payload: todos
  });

