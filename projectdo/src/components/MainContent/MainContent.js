import React, {useState} from 'react'
import './MainContent.css'

import TaskContent from '../TaskContent/TaskContent'

import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";

function MainContent({taskData, setRemove}) {

    const [task, showTask] = useState(false)

    const handleTask = () => {
        showTask(!task)
    }

    return (
        <>
        <div className='MainContent'>
        <div className='MainContent-container'>
        <div className='MainContent-container-content'>
        <div className="MainContent-content">
        <div className='dropDown'>
        <IoIcons.IoIosArrowDropdown className='IoIosArrowDropdown'/>
        <p>List</p>
        </div>
        <BsIcons.BsFillInfoCircleFill className='BsFillInfoCircleFill'/>
        <AiIcons.AiOutlineRobot className='MainContent-AiIcons'/>
        <p className='newTask'>+ NEW TASK</p>
        </div>
        <div className='showClosed'>
        <p> <BsIcons.BsCheck /> SHOW CLOSED</p>
        </div>
        </div>
        <div className='toDoTask'>
        <div className="toDoTask-container">
        <div className="toDoTask-container-left">
        <p className='IoIosArrowDroprightCircle'><IoIcons.IoIosArrowDroprightCircle onClick={handleTask}/></p>
        <p className="task">TO DO TASK</p>
        </div>
        <div className="toDoTask-container-right">
        <div className="toDoTask-container-right-assignee">
        <p>ASSIGNEE</p>
        </div>
        <div className="toDoTask-container-right-duedate">
        <p>DUE DATE</p>
        </div>
        <div className="toDoTask-container-right-priority">
        <p>PRIORITY</p>
        </div>
        <div className="toDoTask-container-right-plus">
        <p><BsIcons.BsFillPlusCircleFill /></p>
        </div>
        </div>
        </div>
        {task ? taskData.map(taskItems => {
            return <TaskContent setRemove={setRemove} taskItems={taskItems}/> 
        }) : ''}
        </div>
        </div>
        </div>
        </>
    )
}

export default MainContent
