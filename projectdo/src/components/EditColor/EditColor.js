import React from 'react'
import './EditColor.css'

function EditColor() {
    return (
        <>
        <div className='editColor'>
        <div className='editColor-content'>
        <div className="editColor-content-color">
        <p className='white'>1</p>
        <p className='red'>2</p>
        <p className='yellow'>3</p>
        <p className='green'>4</p>
        </div>
        <p className='addEditColor'>Add/Edit Color</p>
        </div>
        </div>
        </>
    )
}

export default EditColor
