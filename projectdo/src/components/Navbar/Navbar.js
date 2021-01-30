import React, {useState} from 'react'

import * as FaIcons from "react-icons/fa"

import * as BiIcons from "react-icons/bi";

import * as IoIcons from "react-icons/io";

import * as AiIcons from "react-icons/ai";

import * as BsIcons from "react-icons/bs";

import * as FiIcons from "react-icons/fi";

import {SidebarData,SidebarDataOptions} from './SidebarData'

import './Navbar.css'

import SidebarOptionsEach from '../SidebarOptionsEach/SidebarOptionsEach'

import EditColor from '../EditColor/EditColor'

import ListItemDropDown from '../ListItemDropDown/ListItemDropDown'

import ShowListItems from '../showListItems/ShowListItems'

function Navbar({showAddDetails, showCreateTask}) {

    const [sidebar, setSidebar] = useState(false)
    const [color, setColor] = useState(false)
    const [listItems, setListItems] = useState(false)
    const [nextListItems, setNextListItems] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    const showColor = () => {
        setColor(!color)
    }

    const showListItems = () => {
        setListItems(!listItems)
    }

    const showNextListItems = () => {
        setNextListItems(!nextListItems)
    }

    return (
        <>
        <div className="navbar-content">
        <div className='navbar'>
        <div className='showSideBarMulti'>
        <p className='showSideBar'><FaIcons.FaBars /></p>
        <p className='IoMdArrowForward'><IoIcons.IoMdArrowForward onClick={showSidebar} /></p>
        </div>
        <div className='BiIcons-container'>
        <BiIcons.BiLoaderCircle className='BiIcons' onClick={showColor}/>
        </div>
        {color ? <EditColor /> : ""}
        <div className='icon-section'>
        <div className='listUnderDetail'>
        <p onClick={showListItems}>List <IoIcons.IoMdArrowDropdown /></p>
        </div>
        {listItems ? <ListItemDropDown showAddDetails={showAddDetails} showCreateTask={showCreateTask}/> : ""}
        <div className='addDetails' onClick={showAddDetails}>
            <AiIcons.AiOutlineRobot className='AiIcons'/>
            <p>Add details</p>
        </div>
        </div>
        <div className='BiAlignMiddle'>
        <BiIcons.BiAlignMiddle />
        <p>List</p>
        <div className='BiAlignMiddle-FiMoreHorizontal' onClick={showNextListItems}>
        <FiIcons.FiMoreHorizontal />
        </div>
        <div className='BiAlignMiddle-ShowListItems'>
        {nextListItems ? <ShowListItems /> : ""}
        </div>
        </div>
        <div className='BiChalkboard'>
        <BiIcons.BiChalkboard />
        <p>Board</p>
        </div>
        <div className='AiOutlinePlus'>
        <p><AiIcons.AiOutlinePlus/> View</p>
        </div>
        </div>
        <div className='AiOutlineLink'>
        <p><AiIcons.AiOutlineLink/> Share</p>
        </div>
        </div>
        <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
        <div className='searchInput'>
        <div className='searchInput-1'>
        <p><BsIcons.BsSearch/></p>
        <input type="text" placeholder='Search'/>
        </div>
        <div className='searchInput-2'>
        <p><BsIcons.BsLightning/></p>
        </div>
        </div>
        <ul className='nav-menu-items'>
            {SidebarData.map(el => {
               return <div className='side'>
                <p>{el.symbol}</p>
                <p>{el.title}</p>
                </div>
            })}
            <ul/>
            {SidebarDataOptions.map(el => {
                return <SidebarOptionsEach className='SidebarOptionsEach' key={el.id} {...el}/>
            })}
        </ul>
        </nav>
        </>
    )
}

export default Navbar
