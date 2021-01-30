import React from 'react'

import "./Flag.css"

import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";


function Flag() {
    return (
        <div className="Flag">
        <div className="flag-each">
        <p className="flag-each-red"><RiIcons.RiFlag2Fill /></p>
        <p>Urgent</p>
        </div>
            <hr/>
        <div className="flag-each">
        <p className="flag-each-yellow"><RiIcons.RiFlag2Fill /></p>
        <p>High</p>
        </div>
            <hr/>
        <div className="flag-each">
        <p className="flag-each-blue"><RiIcons.RiFlag2Fill /></p>
        <p>Normal</p>
        </div>
            <hr/>
        <div className="flag-each">
        <p className="flag-each-grey"><RiIcons.RiFlag2Fill /></p>
        <p>Low</p>
        </div>
            <hr/>
        <div className="flag-each">
        <p className="flag-each-clear"><AiIcons.AiOutlineClose /></p>
        <p>Clear</p>
        </div>
        </div>
    )
}

export default Flag
