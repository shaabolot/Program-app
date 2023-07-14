import React from 'react'
import './Nav.css';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <>
        <ul className='nav_item'>
            <li> <Link to='/'><span>Главная</span> </Link> </li>
            <li> <Link to='about'><span>О нас</span> </Link> </li>
            <li> <Link to='contact'> <span>Контакты</span> </Link> </li>
        </ul>
        </>
    )
}

export default Nav