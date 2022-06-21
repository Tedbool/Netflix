import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss'

export default function Navbar(props) {

    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = ()=> {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

//   console.log(isScrolled);
  
  return (
    <div >
        <div className={isScrolled ? "navbarscrolled" : "container"}>
            <div className="left">
                {/* <Link to={"/"}> */}
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png'
                    alt=''
                    className='main-logo'
                />
                {/* </Link> */}
                <span>Home</span>
                {/* <button 
                    onClick={()=>{props.changeTitle("tv")}}
                    > */}
                        {/* <Link to="/tvshows"> */}
                            <span>TV Shows</span>
                            {/* </Link> */}
                {/* </button> */}
                {/* <button 
                    onClick={()=>{props.changeTitle("movie")}}
                    > */}
                        {/* <Link to="/movies"> */}
                        <span>Movies</span>
                        {/* </Link> */}
                {/* </button> */}
                <span>New & Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className="icon"/>
                <Notifications className="icon"/>
                <img
                    src="http://pm1.narvii.com/6936/941ca032795b0d863289ffe9fea681b4c6a7fc7ar1-640-640v2_uhq.jpg"
                    alt=""
                    className='profile-logo'
                />
                <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Log out</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
