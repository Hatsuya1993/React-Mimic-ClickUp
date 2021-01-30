import React from 'react'

import "./Wand.css"

import * as IoIcons from "react-icons/io";

function Wand() {
    return (
        <div className="Wand">
            <div className="Wand-container">
            <p><IoIcons.IoIosColorWand /> Create instantly from template</p>
            <p><IoIcons.IoIosColorWand /> Load from Template</p>
            <p><IoIcons.IoIosColorWand /> Save as Template</p>
            <p><IoIcons.IoIosColorWand /> Update existing Template</p>
            </div>
        </div>
    )
}

export default Wand
