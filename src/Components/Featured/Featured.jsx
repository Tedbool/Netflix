import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import './Featured.scss'

export default function Featured(props) {
  return (
    <div className='featured'>
        {props.titleShown && (
            <div className="category">
                <span>{props.titleShown === "movie" ? "Movies" : "TV Shows"}</span>
                <select name={"genre"} id={"genre"}>
                    <option>Genre</option>
                    <option value={"adventure"}>Adventure</option>
                    <option value={"comedy"}>Comedy</option>
                    <option value={"crime"}>Crime</option>
                    <option value={"fantasy"}>Fantasy</option>
                    <option value={"horror"}>Horror</option>

                </select>
            </div>
        )}
        <img
            src='https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/02/18125117/lsa-hero-feature-12-1600x900.jpeg'
            alt=""
            className='featured-poster'
        />
        <div className="title-info">
            <img 
                src='https://logos-world.net/wp-content/uploads/2020/05/Stranger-Things-Logo.png'
                alt=''
            />
            <span className='title-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eligendi doloribus quisquam fugit quibusdam. Quas voluptate fuga pariatur dolorum deleniti libero placeat aperiam blanditiis iusto, facilis, porro neque soluta obcaecati.
            </span>
            <div className="buttons">
                <button className='play'>
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>More Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
