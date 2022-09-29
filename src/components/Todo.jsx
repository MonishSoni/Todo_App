import React from 'react';
import { ReactComponent as AddIcon } from '../images/add_icon.svg'

import List from './List';

const Todo = () => {
    return (
        <>
            <div className="main">

                <div className="additem">
                    <input type="text" placeholder='Enter Todo...' />
                    <div className="addbtn">
                        <AddIcon width={15} height={15} />
                    </div>

                </div>

                <div className="todolist">
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                </div>

            </div>
        </>
    )
}

export default Todo