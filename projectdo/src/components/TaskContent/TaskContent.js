import React from 'react'

import './TaskContent.css'

import * as AiIcons from "react-icons/ai";

function TaskContent({taskItems, setRemove}) {
    return (
        <div className='TaskContent-container'>
        <div className="TaskContent-container-content">
        <div className="TaskContent-container-left">
        <p className="task">{taskItems.content}</p>
        </div>
        <div className="TaskContent-container-right">
        <div className="TaskContent-container-right-assignee">
        <p>{taskItems.name}</p>
        </div>
        <div className="TaskContent-container-right-duedate">
        <p>DUE DATE</p>
        </div>
        <div className="TaskContent-container-right-priority">
        <p>PRIORITY</p>
        </div>
        <div className="TaskContent-container-right-plus">
        <p><AiIcons.AiOutlineClose className="TaskContent-container-right-close"  onClick={(e) => setRemove(e.target.getAttribute("content"))}  content={taskItems.content}/></p>
        </div>
        </div>
        </div>
        </div>
    )
}

export default TaskContent
