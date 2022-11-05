import React from 'react'
import logo from '/svg/Logo.svg'
import '../../css/mobile/Header.css'
import '../../css/mobile/App.css'
import { useState } from 'react';
// import '../../css/responsive/Header.css'

export default function Header(props) {
    const root = document.querySelector(':root');
    props.mode ? root.style.setProperty('--bg_body', '#0a111e') : root.style.setProperty('--bg_body', '#EDF2F8' )
    props.mode ? root.style.setProperty('--txt_h', '#fff') : root.style.setProperty('--txt_h', '#00313A')
    props.mode ? root.style.setProperty('--txt_p', '#ABB2BF') : root.style.setProperty('--txt_p', '#ABB2BF')
    props.mode ? root.style.setProperty('--primary_clr', '#C778DD') : root.style.setProperty('--primary_clr', '#00313A')
    React.useEffect(() => {
        let links = document.querySelectorAll('.links')
        const list = document.querySelector('li')
        let active = list.getAttribute('data-active')
        for(let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', setActive)
        }
    }, [])
    function setActive(e) {
        //do sth
        e.preventDefault()
        console.log('hi')
    }

    const [nav_is_active, set_nav_is_active] = useState("false"); 
    function displayNav(e) {
        e.preventDefault()
    }
    //get val of check-nav
    //add/remove class based on it
   
       return(
       <div className="header container flex">
            <div className="social flex absolute">
                <div className="line"></div>
                <a href=""><i className="fa-brands fa-discord"></i></a>
                <a href=""><i className="fa-brands fa-telegram"></i></a>
                <a href=""><i className="fa-brands fa-whatsapp"></i></a>
                <a href=""><i className="fa-brands fa-twitter"></i></a>
                <a href=""><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <a href='#home' className="logo flex">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z" fill=""/>
            </svg>
                <span>Lul</span>
            </a>
            <div className="toggler flex">
                    <input 
                        type="checkbox" 
                        name="" 
                        id="check_" 
                    />
                    <label htmlFor="check_" onClick={props.toggler}></label>
            </div>
            <ul className="nav flex">
                <li data-active='true'><a className='links' href="">home</a></li>
                <li><a className='links' href="">about</a></li>
                <li><a className='links' href="">projects</a></li>
                <div className="toggler flex">
                    <input 
                        type="checkbox" 
                        name="" 
                        id="check" 
                    />
                    <label htmlFor="check" onClick={props.toggler}></label>
                </div>
                <li><a className='links' href="">qualifications</a></li>
                <li><a className='links' href="">contact</a></li>
                <li><a className='links' href="">github</a></li>
            </ul>
            <ul className={!nav_is_active ? "nav-icons active" : "nav-icons hidden"}>
                <li><a data-active='active' href=""><i   className="fa-solid fa-house"></i></a></li>
                <li><a href=""><i className="fa-solid fa-user"></i></a></li>
                <li><a href=""><i className="fa-solid fa-diagram-project"></i></a></li>
                <li><a href=""><i className="fa-solid fa-briefcase"></i></a></li>
                <li><a href=""><i className="fa-solid fa-paper-plane"></i></a></li>
            </ul>
            <div className="nav-toggle flex">
                <input 
                    type="checkbox" 
                    name="" 
                    id="check-nav" 
                />
                <label 
                onClick={() => {set_nav_is_active(prev => !prev)}} 
                htmlFor="check-nav"></label>
            </div>
       </div>
    )
}
