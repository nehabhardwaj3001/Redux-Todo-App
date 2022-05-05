import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from "../Actions/index";
import TodoItem from './TodoItem';

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const data = useSelector((state) => state.todoReducers.todos)
    const dispatch = useDispatch();
  
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                <div className='header'>
            <h1>Todo-List</h1>
        </div>
                    <div>
                        <input  className='addItems' 
                        type="text"
                         placeholder='Add Items..'
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                  <button className='button-add'>  <i className='fa fa-plus add-btn'
                            onClick={() => dispatch(addTodo(inputData),
                                setInputData(''))}> </i></button>    
                                
                    </div>
                        <div>
                            {
                                data.map((todo) => {
                                    return <TodoItem key= {todo.id} todo={todo} />
                                })
                            }
                        </div>
          

                </div>
            </div>
        </>
    )
}

export default Todo;
