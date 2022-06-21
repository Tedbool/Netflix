import React, { useState, useEffect } from 'react'
import Featured from '../Featured/Featured'
import List from '../List/List'
import Navbar from '../Navbar/Navbar'
import './Homepage.css'
import axios from 'axios'

export default function Homepage(props) {

  const [titleShown, setTitleShown] = useState("");

  const changeTitleShown = (title)=>{
    if (title === "movie") {
      return setTitleShown("movie")
    }
    else if (title === "tv") {
      return setTitleShown("tv")
    }
    else return setTitleShown("");
  }

  const [data, setData] = useState([]);

  const getData = async () => {
    // for (let i = 1; i < 3; i++) {
      const { data } = await axios.get(`http://localhost:3004/movies/`);
      setData(data);
    // }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  // console.log("Home page img " + data.img);
  return (
    <div className='homepage'>
        <Navbar titleShown={"tv"} changeTitle={changeTitleShown}/>
        <Featured titleShown={props.titleShown} changeTitle={changeTitleShown}/>
        <List titleShown={props.titleShown} data={data} imgTitle={data.img}/>
        <List titleShown={props.titleShown} data={data} imgTitle={data.img}/>
        <List titleShown={props.titleShown} data={data} imgTitle={data.img}/>
        {/* <List titleShown={props.titleShown}/> */}
        
    </div>
  )
}
