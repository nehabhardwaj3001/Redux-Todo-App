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

export const removeTodo = (data) => {
    return {
        type: "REMOVE_TODO",
        payload: ""
    }
}