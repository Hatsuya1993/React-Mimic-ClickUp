import React from 'react'
import './RightListDropDown.css'

import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as VsIcons from "react-icons/vsc";
import * as HiIcons from "react-icons/hi";

function RightListDropDown() {
    return (
 <>
            <div className='rightlistDropDownItem'>
            <div className="rightlistDropDownItem-content">
            <div className="rightlistDropDownItem-content-top">
            <p><AiIcons.AiOutlineLink /></p>
            <p><BsIcons.BsPencil /></p>
            <p><AiIcons.AiOutlinePlus /></p>
            <p><AiIcons.AiOutlineMail /></p>
            <p><AiIcons.AiOutlineDownload /></p>
            <p className='BsTrash'><BsIcons.BsTrash /></p>
            </div>
            <div className="rightlistDropDownItem-content-middle">
            <p><BsIcons.BsFillInfoCircleFill /> List Info</p>
            <p><BiIcons.BiListPlus /> New List</p>
            <div className='sprints'>
            <p><BsIcons.BsArrowReturnRight /> Sprints</p>
            <p><IoIcons.IoIosArrowForward /></p>
            </div>
            <div className='template'>
            <p><ImIcons.ImMagicWand/> Template Center</p>
            <p><IoIcons.IoIosArrowForward /></p>
            </div>
            </div>
            <div className='rightlistDropDownItem-content-bottom'>
            <p><AiIcons.AiOutlineMinusSquare /> Edit List Statuses</p>
            <p><VsIcons.VscNewFile /> Custom Fields</p>
            <p><HiIcons.HiDownload /> Move</p>
            <p><HiIcons.HiOutlineClipboardCopy /> Duplicate</p>
            <p><AiIcons.AiOutlineRobot /> Automations</p>
            <p><AiIcons.AiOutlineStar />Add to Favourites</p>
            <div className='button'><button><BiIcons.BiLinkAlt/> Sharing & Permissions</button></div>
            </div>
            </div>
            </div>
        </>
    )
}

export default RightListDropDown
