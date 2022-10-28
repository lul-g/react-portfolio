import React from 'react'
import logo from '/svg/Logo.svg'

export default function Header(props) {
    console.log(props.mode)
    const light = {
        backgroundColor: props.mode ? '#282c33': '#EDF2F8',
    }
    return(
       <div className="header container flex">
            <div className="logo flex">
                <img src={logo} alt="" />
                <span>Lul</span>
            </div>
            <ul className="nav flex">
                <li><a href="">home</a></li>
                <li><a href="">about</a></li>
                <li><a href="">projects</a></li>
                <div className="toggler flex">
                    <input 
                        type="checkbox" 
                        name="" 
                        id="check" 
                    />
                    <label htmlFor="check" onClick={props.toggler}>
                        <i className="fa-solid fa-sun"></i>
                        <i className="fa-solid fa-moon"></i>
                    </label>
                </div>
                <li><a href="">qualifications</a></li>
                <li><a className='' href="">contact</a></li>
                <li><a href="" className="">github</a></li>
                
            </ul>
            
       </div>
    )
}