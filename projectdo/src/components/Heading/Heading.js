import React from "react"

import { Container } from 'react-bootstrap';

import '../Heading/Heading.css'

import {RiPushpin2Fill} from 'react-icons/ri'


export default function Heading() {
    return (
<Container fluid>
        <div className='Heading'>
        <div className='Heading-container'>
        <p className='favourite'>FAVOURITE</p>
        <p className='favourite-content'>You don't have any Favourites yet. <a href='https://docs.clickup.com/en/articles/1948347-favorites' target="_blank">Learn how to create one </a> or <a href='#'>hide this</a></p>
        </div>
        <i class="fas fa-thumbtack"></i>
        <RiPushpin2Fill className='pin'/>
        </div>
</Container>
    )
}

