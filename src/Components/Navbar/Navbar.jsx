import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import './Navbar.scss'

export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = ()=> {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    const [titleChosen, setTitleChosen] = useState("TV Shows");

    const handleTitle = (title)=> {
        if (title === "movie") {
            return setTitleChosen("movie");
        }
        else return setTitleChosen("tv");
    }
    console.log(isScrolled);
  return (
    <div >
        <div className={isScrolled ? "navbarscrolled" : "container"}>
            <div className="left">
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png'
                    alt=''
                    className='main-logo'
                />
                <span>Home</span>
                <button 
                    // onClick={handleTitle("tv")}
                    >
                        TV Shows
                </button>
                <button 
                    // onClick={handleTitle("movies")}
                    >
                        Movies
                </button>
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
