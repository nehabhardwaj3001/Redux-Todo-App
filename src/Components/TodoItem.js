import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo } from "../Actions/index";
import { EditTodo } from "../Actions/index";


const TodoItem = ({todo}) => {
    const [editTodo,setEditTodo]=React.useState(todo.data)
    const [isEditing,setIsEditing]=React.useState(false)
    const dispatch=useDispatch()
  return (
    <div className='showItems'>
{isEditing ? 
( 
    <input type='text' 
                   value={editTodo} 
                   className='list' 
                   onChange ={(e) => {
                    setEditTodo(e.target.value)}
                   }
                   />
) : 
(<h4>{todo.data}</h4>)}
   <button className='btn-edit' 
                        onClick={()=>{
                            dispatch(EditTodo({
                                ...todo,
                                data:editTodo
                            }))
                            if(isEditing){
                                setEditTodo(todo.data)
                            }
                            setIsEditing(!isEditing)
                            }}>{isEditing?"UPDATE" : "EDIT"}</button>
<button className='button-delete'> 
  <i className='far fa-trash-alt add-btn' 
  title='Delete-item'
                onClick={() => dispatch(deleteTodo(todo.id),
                    )}> </i></button> 
     
</div>
  )
}

export default TodoItem
