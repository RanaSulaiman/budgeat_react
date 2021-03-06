
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'

//main navigation
import Search from 'react-icons/lib/fa/search';
import HomeOutline from 'react-icons/lib/ti/home-outline';

//Logo
import AttachMoney from 'react-icons/lib/md/attach-money'


export const Nav = () => (

  <div className='container-fluid'>
    <div className='row-fluid text-align'>
      <div className='col-lg-4 col-md-5 col-sm-6 col-xs-7 logo-display'>
        <AttachMoney className='logo-icon'/>
        <p className='app-name'>BudgEat</p>
        <AttachMoney className='logo-icon'/>
      </div>

      <ul className='col-lg-2 col-md-3 col-md-4 col-xs-5 nav-display' >
        <li className=''>
          <Link activeClassName='active' to='/'>
          <HomeOutline className='nav-icon'/>
        </Link>
        </li>

        <li className=''>
          <Link activeClassName='active' to='/FilterRecipes'><Search className='nav-icon'/></Link>
        </li>
      </ul>
    </div>{/*row*/}
  </div>//container
)

export default Nav;
