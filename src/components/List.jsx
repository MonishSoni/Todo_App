import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { delTodo } from "../actions/index"
import { MdDelete, MdMode, MdCheckCircle } from "react-icons/md";

const List = ({ todoValue, id }) => {
    const [editable, setEditable] = useState(false)
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch();

    return (
        <>
            <div className="list">
                <p id={checked ? "check" : ""} className={editable ? "edit" : ""} contentEditable={editable}>{todoValue}</p>
                <div className="hline"></div>
                <div className="btns">
                    <MdCheckCircle onClick={() => setChecked((prev) => !prev)} />
                    <div></div>
                    <MdMode onClick={() => setEditable((prev) => !prev)} />
                    <div></div>
                    <MdDelete onClick={() => dispatch(delTodo(id))} />

                </div>
            </div>
        </>
    )
}

export default List