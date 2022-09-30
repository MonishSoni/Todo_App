import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as AddIcon } from '../images/add_icon.svg'
import { addTodo, removeTodo } from "../actions/index"
import List from './List';


const Todo = () => {

    const [inputData, setInputData] = useState("");
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoreducer.list);

    const handleAdd = () => {
        if (inputData !== "") {
            dispatch(addTodo(inputData), setInputData(''))
        }

        else {
            alert('Please enter valid Input')
        }
    }
    return (
        <>
            <div className="main">

                <div className="additem">
                    <input type="text" placeholder='Enter Todo...' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    <div className="addbtn" onClick={handleAdd}>
                        <AddIcon width={15} height={15} />
                    </div>

                </div>

                <div className="todolist">
                    {list.map((elem) => (
                        <List key={elem.id} id={elem.id} todoValue={elem.data} />
                    ))}

                </div>

                <p className="addbtn" id='removeAll' onClick={() => dispatch(removeTodo())} >X</p>

            </div>
        </>
    )
}

export default Todo