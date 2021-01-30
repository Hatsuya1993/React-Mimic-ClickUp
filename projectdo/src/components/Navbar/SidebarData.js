import React from 'react'

import * as AiIcons from "react-icons/ai";

import * as BsIcons from "react-icons/bs";

export const SidebarData = [{
        title: 'Home',
        symbol: < AiIcons.AiOutlineHome / > ,
    },
    {
        title: 'Notifications',
        symbol: < AiIcons.AiOutlineBell / >
    },
    {
        title: 'Show more',
        symbol: < AiIcons.AiOutlineArrowDown / >
    }

]

export const SidebarDataOptions = [{
        id: 1,
        title: 'SPACES',
        subNav: [{
            addNew: true,
            everything: [{
                icon: < AiIcons.AiOutlineMinusCircle / > ,
                text: 'Everything'
            }, {
                icon: < BsIcons.BsFillSquareFill / > ,
                text: 'Space'
            }]
        }]
    },
    {
        id: 2,
        title: 'DASHBAORDS',
        subNav: [{
            title: 'My dashboards',
            icon: <BsIcons.BsPlus />
        }]
    },
    {
        id: 3,
        title: 'DOCS',
        subNav: [{
            addNew: true,
            contents: [
                'All',
                'Assigned to me',
                'Shared',
                'Private'
            ]
        }]
    }
]