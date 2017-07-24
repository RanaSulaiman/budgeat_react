
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
    <div className='row'>
      <div className='logo-display'>
        <p className='col-xsm-2'><AttachMoney className='logo-icon'/></p>
        <p className='col-xsm-2 app-name'>BudgEat</p>
        <p className='col-xsm-2'><AttachMoney className='logo-icon'/></p>
      </div>

      <ul className='nav-display' >
        <li className='col-xsm-2 text-center'>
          <Link activeClassName='active' to='/'>
          <HomeOutline className='nav-icon'/>
        </Link>
        </li>

        <li className='col-xsm-2'>
          <Link activeClassName='active' to='/FilterRecipes'><Search className='nav-icon'/></Link>
        </li>
      </ul>
    </div>{/*row*/}
  </div>//container
)

export default Nav;
