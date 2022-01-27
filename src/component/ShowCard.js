import React from 'react';
import { useState, useEffect } from "react";
import './ShowCard.css'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}


function ShowCard(props) {
    let dimensions = useWindowDimensions();
    console.log(dimensions)
    let imageWidth = dimensions.width*0.14;
 
  return (
 <div className="ShowCard" >
                <img
                  className="CardImage"
                  loading="lazy"
                  style={{
                    height: imageWidth * 1.32,
                    width: imageWidth,
                    objectFit: "stretch",
                  }}
                  src={props.image}
                  alt="Disney+&nbsp;Hotstar"
                />
                <div className="CardText" style={{width:imageWidth,display:'flex',flexDirection:'column' }}>
                    <h4 style={{color:'white'}}>{props.title}</h4>
                    <p>{props.desc}</p>
                </div>
             
                </div>
  );
}

export default ShowCard;
