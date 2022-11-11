import React from 'react'
import './Header.css'
import Logo from '../../image/logo.png'

const Header = () => {
  return (
    <>
    <header className='header'>
        <div className='container'>
            <nav className='header__nav'>
                <h1 className='header__title'>
                  <img src={Logo}/>
                </h1>
                <ul className='header__menu'>
                    <li className='header__item'>Home</li>
                    <li className='header__item'>Portfolio</li>
                    <li className='header__item'>Contact Us</li>
                </ul>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Header