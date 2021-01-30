import React from 'react'

import './ShowTemplateItem.css'

import * as GoIcons from "react-icons/go";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";


function showTemplateItem() {
    return (
        <div className='showTemplateItem'>
        <div className="showTemplateItem-container">
        <p>TEMPLATE CENTER</p>
        <div className='showTemplateItem-container-GoBrowser'>
        <p><GoIcons.GoBrowser/> Browse Templates </p>
        </div>
        <hr/>
        <div className='showTemplateItem-container-GoBrowser'>
        <p><AiIcons.AiOutlineSave/> Save a a Template </p>
        </div>
        <div className='showTemplateItem-container-GoBrowser'>
        <p><GrIcons.GrUpdate/> Updating existing Template </p>
        </div>
        </div>    
        </div>
    )
}

export default showTemplateItem
