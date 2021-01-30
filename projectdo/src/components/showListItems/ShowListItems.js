import React, {useState} from 'react'

import './ShowListItems.css'

import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as VsIcons from "react-icons/vsc";
import * as HiIcons from "react-icons/hi";
import * as RiIcons from "react-icons/ri";

import ShowTemplateItem from '../ShowTemplateItem/ShowTemplateItem'

function ShowListItems() {

    const [template, setTemplate] = useState(false)

    const templatePress = () => {
        setTemplate(!template)
    }

    return (
       <>
           <div className='ShowListItems'>
           <div className="ShowListItems-container">
           <div className="ShowListItems-container-view">
           <div>
           <p>VIEW OPTIONS</p>
           <p><a href="#">Default Settings</a></p>
           <p>This view is require. <AiIcons.AiOutlineQuestionCircle /></p>
           </div>
           <div className='ShowListItems-container-view-AiIcons'>
           <AiIcons.AiOutlineCopy />
           <BsIcons.BsBookmark />
           </div>
           </div>
           <hr/>
           <div className='ShowListItems-container-view-default'>
           <div className='items'>
           <div className='items-container'>
           <p><AiIcons.AiOutlineHome /> Default for everyone <AiIcons.AiOutlineQuestionCircle /></p>
           </div>
           <BiIcons.BiSliderAlt />
           </div>
           </div>
           <div className='ShowListItems-container-view-default'>
           <div className='items'>
           <div className='items-container'>
           <p><AiIcons.AiOutlinePushpin /> Pin view</p>
           </div>
           <BiIcons.BiSliderAlt />
           </div>
           </div>
            <div className='ShowListItems-container-view-default'>
           <div className='items'>
           <div className='items-container'>
           <p><RiIcons.RiAccountCircleLine /> Default to me mode</p>
           </div>
           <BiIcons.BiSliderAlt />
           </div>
           </div>
            <div className='ShowListItems-container-view-default'>
           <div className='items'>
           <div className='items-container'>
           <p><AiIcons.AiOutlinePoweroff /> Reset view to defaults</p>
           </div>
           </div>
           </div>
            <div className='ShowListItems-container-view-default        templateMain'>
           <div className='items' onClick={templatePress}>
           <div className='items-container'>
           <p><IoIcons.IoIosColorWand /> Template Center</p>
           </div>
           <RiIcons.RiArrowDropRightLine
           />
           </div>
           {template ? <div className='ShowTemplateItem'><ShowTemplateItem /></div> : ""}
           </div>
           <hr/>
            <p className='permission'>PERMISSION</p>
            <div className='ShowListItems-container-view-default'>
           <div className='items'>
           <div className='items-container'>
           <p><AiIcons.AiOutlineUnlock /> Personal view <AiIcons.AiOutlineQuestionCircle /></p>
           </div>
           <BiIcons.BiSliderAlt />
           </div>
           </div>
            <div className='ShowListItems-container-view-default'>
           <div className='items'>
           <div className='items-container'>
           <p><BsIcons.BsShield /> Protect view <AiIcons.AiOutlineQuestionCircle /></p>
           </div>
           <BiIcons.BiSliderAlt />
           </div>
           </div>
           <hr/>
           <p className='personalOptions'>PERSONAL OPTIONS</p>
            <div className='ShowListItems-container-view-default'>
           <div className='items'>
           <div className='items-container'>
           <p><AiIcons.AiOutlineSave /> Autosave view </p>
           </div>
           <BiIcons.BiSliderAlt />
           </div>
           </div>
            <div className='ShowListItems-container-view-default'>
           <div className='items'>
           <div className='items-container'>
           <p><AiIcons.AiOutlinePaperClip /> Reset view to defaults</p>
           </div>
           </div>
           </div>
            <div className='ShowListItems-container-view-default'>
           <div className='items'>
           <div className='items-container'>
           <p><AiIcons.AiOutlineStar /> Add to Favourite</p>
           </div>
           </div>
           </div>
           </div>
           </div>
        </>
    )
}

export default ShowListItems
