import React from 'react'
import MenuList from './MenuList'
import './Nav.css'

function Nav() {
    return (
        <div className="nav__top">
            {/* <h1 className='nav__title'>AppGetaway</h1> */}
            <img className="nav__title" src="https://github.com/ablanco12/scheduler-ui/blob/master/public/assets/appddgetaways_logo-02.png?raw=true" alt="" />
            <MenuList />
        </div>
    )
}

export default Nav
