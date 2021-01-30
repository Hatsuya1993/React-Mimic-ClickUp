import React from 'react'
import './ShareListPopUp.css'

import * as AiIcons from "react-icons/ai";

function ShareListPopUp({setdisplayPopUpShare}) {
    return <>
    <div className='ShareListPopUp'>
    <div className="ShareListPopUp-container">
    <div className="ShareListPopUp-container-top">
    <div className="ShareListPopUp-container-top-shareList">
    <div className="shareList">
    <h3>Share List</h3>
    <p>List</p>
    </div>
    <div className='AiOutlineClose'>
    <AiIcons.AiOutlineClose className='AiOutlineClose-symbol' onClick={() => setdisplayPopUpShare(false)}/>
    </div>
    </div>
    <div className='ShareListPopUp-container-top-filter'>
    <AiIcons.AiOutlineSearch className='ShareListPopUp-container-top-filter-AiOutlineSearch'/> <input placeholder='Filter people...' type="text" name="" id=""/>
    </div>
    <div className='ShareListPopUp-container-top-shared'>
    <div className='ShareListPopUp-container-top-shared-with'>
    <p>Shared with</p>
    <div className='ShareListPopUp-container-top-shared-with-space'>
    <p>SPACE</p>
    <p>Space</p>
    <p>Just me</p>
    </div>
    <div className='ShareListPopUp-container-top-shared-with-space-AiFillUnlock'>
    <p><AiIcons.AiFillUnlock /></p>
    <p>Make private</p>
    </div>
    </div>
    <div className='ShareListPopUp-container-top-shared-permissions'>
    <p>Permissions</p>
    </div>
    </div>
    </div>
    <div className='typeNameEmail'>
    <div className='typeNameEmail-content'>
    <div>
    <AiIcons.AiOutlineUserAdd />
    </div>
    <div>
    <h4>Type a name or email to invite</h4>
    </div>
    </div>
    <div>
    <AiIcons.AiFillQuestionCircle />
    </div>
    </div>
    </div>
    </div>
    </>
}

export default ShareListPopUp
