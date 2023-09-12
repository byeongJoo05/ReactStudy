import { NavLink, Outlet } from "react-router-dom";

import React from 'react'

const Articles = () => {
    const activeStyle = {
        color:'green',
        fontSize: 21,
    }
  return (
    <ul>
        <li>
            <NavLink to="/articles/1" style={({isActive}) => (isActive ? activeStyle : undefined)}>아티클 1</NavLink>
        </li>
        <li>
            <NavLink to="/articles/2" style={({isActive}) => (isActive ? activeStyle : undefined)}>아티클 2</NavLink>
        </li>
        <li>
            <NavLink to="/articles/3" style={({isActive}) => (isActive ? activeStyle : undefined)}>아티클 3</NavLink>
        </li>
        <li>
            <NavLink to="/articles/4" style={({isActive}) => (isActive ? activeStyle : undefined)}>아티클 4</NavLink>
        </li>
    </ul>
  )
}

export default Articles