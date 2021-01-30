import React from 'react'

import '../DisplaySubBar/DisplaySubBar.css'

function DisplaySubBar(props) {
    const {addNew, everything, title, icon, contents} = props[0] 
    return (
        <>
        <div>
        {addNew ? <p className='addNew'>+ add new</p> : ""}
        {contents ? contents.map(el => <p>{el}</p>) : ""}
        {everything ? everything.map(el => {
            return <div className='spaces'>
            <p>{el.icon}</p>
            <p>{el.text}</p>
            </div>
        }) : ""}
        {title ? <div className='dashboards'><p className='title'>{title}</p>{icon}</div> : ""}
        </div>
        </>
    )
}

export default DisplaySubBar