import React, {useState} from 'react'

import * as IoIcons from "react-icons/io";

import DisplaySubBar from '../DisplaySubBar/DisplaySubBar'

import './SidebarOptionsEach.css'

function SidebarOptionsEach(el) {
    const [subNav, setSubNav] = useState(false)

    const showSubBar = () => {
        setSubNav(!subNav)
    }

    return  <div className='sideOptions'>
                <div className='subNav' onClick={showSubBar}>
                <p className='subNav-items'>{el.title}</p>
                {el.subNav ? <IoIcons.IoMdArrowDropdown/> : ""}
                </div>
                {subNav ? <DisplaySubBar className='displaySubBar' {...el.subNav}/> : ""}
                </div>
}

export default SidebarOptionsEach
