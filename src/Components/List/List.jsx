import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React from 'react';
import './List.scss';
import ListItem from '../ListItem/ListItem';
import { useRef, useState } from 'react';


export default function List(props) {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const [showsOrMovies, setShowOrMovies] = useState("");

    const listRef = useRef();
    // console.log("list prop img is " + props.imgTitle);

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }

    }
    const checkTypeTitles = ()=>{
        if (props.titleShown === "movie") {
            return setShowOrMovies("movie")
        }
        else return setShowOrMovies("tv")
    }
  return (
    <div className='list'>
        <span className="list-title">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined 
                className='slider-arrow left' 
                onClick={()=> handleClick("left")}
                style={{display: !isMoved && "none"}}
                />
            <div className="list-container" ref={listRef}>
                {/* {console.log(showsOrMovies)} */}
                <ListItem data={props.data} img={props.imgTitle}/>
                {/* <ListItem title={props.nameTitle} img={props.imgTitle}/> */}

            </div>
            <ArrowForwardIosOutlined className='slider-arrow right' onClick={()=> handleClick("right")}/>
            
        </div>
    </div>
  )
}
