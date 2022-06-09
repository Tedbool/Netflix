import React, { useEffect, useState } from 'react';
import './ListItem.scss';
import Sliders from "../../sliderItems.json";
import axios from "axios";
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons';


export default function ListItem(props) {

  //  props.img = props.img.replace(/['"]+/g, '')



  //  console.log("new img is " + props.img);

  // console.log(props.title);
  return (
    <div>
    <div
      style={{ display: "flex", width: "225px", height: "120px" }}
    className='list-item'
    >
      {/* <h1 style={{color:"white"}}>{props.title}</h1>
       <img src={props.img}/>
       <img src={require('../../Assets/1.png')}/> */}
      {/* {console.log(props.img)}
       {console.log(props.title)} */}

      {props.data.map(item => {

        const img = item.img ? item.img : '1.png'
        const src = require(`../../Assets/${img}`)

        return (
          // <div style={{ display: "flex", width: "225px", height: "120px" }}>
            // <h3 style={{ color: "white" }}>{item.title}</h3>
            <img src={src} />
          // </div>
        )
      })}
      </div>
    <div className='itemInfo'>
      <div className="icons">
        <PlayArrow/>
        <Add/>
        <ThumbUpAltOutlined/>
        <ThumbDownOutlined/>

      </div>
    <div className='ItemInfoTop'>
      <span>1 hour 14 mins</span>
      <span className='limitAge'>16+</span>
      <span>1999</span>
    </div>
    <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eveniet at aut facere corrupti esse nisi dolor ipsa. Voluptates ipsa magnam consequuntur nulla, consequatur voluptatem facilis doloremque rem temporibus sed!</div>
    <div className="genre">Action</div>
    </div>
    </div>
  )
}
