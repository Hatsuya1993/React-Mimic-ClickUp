import React from 'react'

import "./CreateTaskDepend.css"

import * as AiIcons from "react-icons/ai";

function CreateTaskDepend() {
    return (
        <div className="CreateTaskDepend-container">
        <div className="CreateTaskDepend-container-top">
            <h1>Dependencies</h1>
            <h1><AiIcons.AiOutlineClose className="CreateTaskDepend-container-top-close"/></h1>
        </div>
        <div className="CreateTaskDepend-container-waiting">
        <div className="CreateTaskDepend-container-waiting-top">
        <p><AiIcons.AiFillMinusCircle /></p>
        <p>WAITING ON</p>
        </div>
        <p>Tasks that must be completed before this task</p>
        <p><AiIcons.AiOutlinePlus /> Add waiting on task</p>
        </div>
        <div className="CreateTaskDepend-container-blocking">
        <div className="CreateTaskDepend-container-blocking-top">
        <p><AiIcons.AiFillMinusCircle /></p>
        <p>BLOCKING</p>
        </div>
        <p>Tasks that can't start until this task is completed</p>
        <p><AiIcons.AiOutlinePlus /> Add waiting on task</p>
        </div>
        <div className="CreateTaskDepend-container-tasks">
        <div className="CreateTaskDepend-container-tasks-top">
        <p><AiIcons.AiFillMinusCircle /></p>
        <p>TASKS</p>
        </div>
        <p>Tasks that relate to each other but aren't actually dependent on each other</p>
        <p><AiIcons.AiOutlinePlus /> Add linked task</p>
        </div>
        </div>
    )
}

export default CreateTaskDepend
