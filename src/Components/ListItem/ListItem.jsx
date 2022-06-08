import React from 'react';
import './ListItem.scss';
import Sliders from "../../sliderItems.json";

export default function ListItem() {
  return (
    <div className='list-item'>
        {
          Sliders && Sliders.data.movies.map((record) => {
            <div>
              <img
                src={require("../../Assets/1.png")}
              />
              <span>{Sliders.title}</span>
            </div>
          })
        }
    </div>
  )
}
