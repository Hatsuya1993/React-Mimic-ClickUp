import React from 'react'

import Navbar from '../Navbar/Navbar'

function Options({showAddDetails, showCreateTask}) {
    return <div className='options'>
        <Navbar showAddDetails={showAddDetails} showCreateTask={showCreateTask}/>
    </div>
}

export default Options
