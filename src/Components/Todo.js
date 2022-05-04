import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from "../Actions/index";
import { deleteTodo } from "../Actions/index";
import { removeTodo } from "../Actions/index";

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch();

    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                <div className='header'>
            <h1>Todo-List</h1>
        </div>
                    <div>
                        <input  className='addItems' type="text" placeholder='Add Items..'
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                  <button className='button-add'>  <i className='fa fa-plus add-btn'
                            onClick={() => dispatch(addTodo(inputData),
                                setInputData(''))}> </i></button>    
                    </div>

                    <div className='showItems'>
                        {
                            list.map((elem) => {
                           return(
                           <div className='eachItems' key={elem.id}>
                                <h3>{elem.data}</h3>
                                <div className='todo-btn'>
                            <button className='button-delete'>   <i className='far fa-trash-alt add-btn' title='Delete-item'
                                    onClick={() => dispatch(deleteTodo(elem.id),
                                        )}> </i></button> 
                                        </div>
                            </div>
                             ) })
                        }

                    </div>

                </div>
            </div>
        </>
    )
}

export default Todo;
