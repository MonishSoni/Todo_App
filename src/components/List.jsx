import React from 'react';
import { MdOutlineDoneAll, MdDelete, MdMode,MdCheckCircle } from "react-icons/md";

const List = () => {
    return (
        <>
            <div className="list">
                <p>Buy Milk and Apple Buy Milk and Apple</p>
                <div className="hline"></div>
                <div className="btns">
                    <MdCheckCircle />
                    <div></div>
                    <MdMode />
                    <div></div>
                    <MdDelete />

                </div>
            </div>
        </>
    )
}

export default List