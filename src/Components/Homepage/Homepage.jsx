import React, { useState } from 'react'
import Featured from '../Featured/Featured'
import List from '../List/List'
import Navbar from '../Navbar/Navbar'
import './Homepage.css'

export default function Homepage() {

  const [titleShown, setTitleShown] = useState("movie");

  const changeTitleShown = (title)=>{
    if (title === "movies") {
      return setTitleShown("movies")
    }
    else return setTitleShown("tv");
  }
  return (
    <div className='homepage'>
        <Navbar/>
        <Featured titleShown={titleShown} changeTitle={changeTitleShown}/>
        <List/>
        <List/>
        <List/>
        
    </div>
  )
}
