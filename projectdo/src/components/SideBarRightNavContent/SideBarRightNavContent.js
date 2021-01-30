import React, {useState} from 'react'
import './SideBarRightNavContent.css'

import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";


import RightListDropDown from '../RightListDropDown/RightListDropDown'

import ShareListPopUp from '../ShareListPopUp/ShareListPopUp'

function SideBarRightNavContent({setDarkenPopUp}) {

    const [showList, setShowList] = useState(false)
    const [displayPopUpShare, setdisplayPopUpShare] = useState(false)


    const displayList = () => {
        setShowList(!showList)
    }

    const DisplayShareListPopUp = () => {
        setdisplayPopUpShare(!displayPopUpShare)
        setDarkenPopUp(!displayPopUpShare)
    }

    return (
        <>
        {displayPopUpShare ? <ShareListPopUp className='ShareListPopUp' setdisplayPopUpShare={setdisplayPopUpShare}/> : ""}
        <div className='SideBarRightNavContent'>
        <div className="SideBarRightNavContent-content">
        <div className='SideBarRightNavContent-content-space'>
        <p className='left'>Space > List</p>
        <p className='right'><RiIcons.RiPaintLine /></p>
        </div>
        <div className='SideBarRightNavContent-content-list'>
        <h3>List</h3>
        <div><p onClick={displayList}><BiIcons.BiDotsHorizontalRounded  className='BiDotsHorizontalRounded'/></p>
        {showList ? <RightListDropDown /> : ""}
        </div>
        </div>
        <div className="sharingPermission" onClick={DisplayShareListPopUp}>
        <p><AiIcons.AiOutlineLink /> Sharing & Permissions</p>
        </div>
        <br/>
        <div className="setDueDate">
        <div className='setDueDate-content'>
        <p><AiIcons.AiOutlineCalendar /> Set due date</p>
        <p className='AiOutlineFlag'><AiIcons.AiOutlineFlag/></p>
        <p className='AiOutlineRobot'><AiIcons.AiOutlineRobot /></p>
        <p className='RiAccountCircleLine'><RiIcons.RiAccountCircleLine /></p>
        </div>
        <div>
        <p><ImIcons.ImBubble2 /> 0 Comment</p>
        </div>
        </div>
        <div className='description-box'>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <p ><BsIcons.BsSlash className='BsSlash'/></p>
        </div>
        <div className='AiOutlinePrinter'>
        <AiIcons.AiOutlinePrinter />
        </div>
        <br/>
        <div className='attachments-container'>
        <div className='Attachments'>
        <h3>Attachments</h3>
        <p>Add <MdIcons.MdArrowDropDown /></p>
        </div>
        <div className='boxes'>
        <div className='AiOutlineAlignCenter'>
        <AiIcons.AiOutlineAlignCenter />
        </div>
        <div className='AiOutlineAlignLeft'>
        <AiIcons.AiOutlineAlignLeft />
        </div>
        </div>
        </div>
        <div className='dropFiles'>
        <div className='dropFiles-content'>
        <p><AiIcons.AiOutlineCloudDownload className='AiOutlineCloudDownload' /> Drop files here to attached or <a href="#"> browse</a></p>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default SideBarRightNavContent
