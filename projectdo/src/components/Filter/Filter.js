import React from 'react'
import './Filter.css'
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as AiIcons from "react-icons/ai";


function Filter() {
    return (
        <div className='content'>
            <div className="content-left">
            <p className='BsSearch'><BsIcons.BsSearch/></p>
            <input type="text" placeholder='Filter by task name...' name="" id=""/>
            </div>
            <div className="content-right">
            <div className='AiOutlineSave'>
            <p><AiIcons.AiOutlineSave /> Save View </p>
            </div>
            <div>
            <p className='AiOutlineLoading3Quarters'>
            <AiIcons.AiOutlineLoading3Quarters />
            </p>
            </div>
            <div className='split'>
            </div>
            <div className='filter'>
            <p><BiIcons.BiAlignMiddle /></p>
            <p>Filter</p>
            </div>
            <div className='status'>
            <p><ImIcons.ImStack /></p>
            <p>Group by: Status</p>
            </div>
            <div className='subTasks'>
            <p><AiIcons.AiOutlineSubnode /></p>
            <p>Subtasks</p>
            </div>
            <div className='show'> 
            <p><AiIcons.AiOutlineEye /></p>
            <p>Show</p>
            </div>
            <div className='dots'>
            <p><BiIcons.BiDotsHorizontalRounded /></p>
            </div>
            </div>
        </div>
    )
}

export default Filter
