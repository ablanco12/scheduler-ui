import React from 'react'
import MenuList from './MenuList'
import './Nav.css'

function Nav() {
    return (
        <div className="nav__top">
            <h1 className='nav__title'>AppGetaway</h1>
            <MenuList />
        </div>
    )
}

export default Nav
