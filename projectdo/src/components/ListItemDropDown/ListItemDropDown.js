import React, {useState} from 'react'
import './ListItemDropDown.css'

import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as VsIcons from "react-icons/vsc";
import * as HiIcons from "react-icons/hi";

import ShowSprints from "../ShowSprints/ShowSprints"
import ShowTemplateItem from "../ShowTemplateItem/ShowTemplateItem"

function ListItemDropDown({showAddDetails, showCreateTask}) {

    const [sprints, setSprints] = useState(false)
    const [template, setTemplate] = useState(false)

    const showSprints = () => {
        setSprints(!sprints)
    }

    const showTemplate = () => {
        setTemplate(!template)
    }

    return (
        <>
            <div className='listDropDownItem'>
            <div className="listDropDownItem-content">
            <div className="listDropDownItem-content-top">
            <p><AiIcons.AiOutlineLink /></p>
            <p><BsIcons.BsPencil /></p>
            <p onClick={showCreateTask}><AiIcons.AiOutlinePlus /></p>
            <p><AiIcons.AiOutlineMail /></p>
            <p><AiIcons.AiOutlineDownload /></p>
            <p className='BsTrash'><BsIcons.BsTrash /></p>
            </div>
            <div className="listDropDownItem-content-middle">
            <p onClick={showAddDetails}><BsIcons.BsFillInfoCircleFill /> List Info</p>
            <p><BiIcons.BiListPlus /> New List</p>
            <div className='sprints' onClick={showSprints}>
            <p><BsIcons.BsArrowReturnRight /> Sprints</p>
            <p><IoIcons.IoIosArrowForward /></p>
            {sprints ? <div className='ShowSprints'><ShowSprints /></div> : ""}
            </div>
            <div className='template' onClick={showTemplate}>
            <p><ImIcons.ImMagicWand/> Template Center</p>
            <p><IoIcons.IoIosArrowForward /></p>
            {template ?  <div className='ShowTemplateItemList'><ShowTemplateItem /></div> : ""}
            </div>
            </div>
            <div className='listDropDownItem-content-bottom'>
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

export default ListItemDropDown
