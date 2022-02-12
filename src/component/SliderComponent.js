import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderComponent.css";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
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

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    swipeToSlide: true,
    adaptiveHeight: true,
  };

const [carouselData , setCarouselData] = useState([]);

  async function queryCarousel() {
    const querySnapshot = await getDocs(collection(db, "carousels"));
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      console.log(`${doc.id} => ${doc.data()}`);
      //updating the array state
     setCarouselData(oldArray => [...oldArray, data]);
    });
  }

  useEffect(() => {
    queryCarousel();
  }, []);


  const dimensions = useWindowDimensions();

  let imageWidth = dimensions.width * 0.7;
  console.log(carouselData.length)
 if(carouselData)
 {
    return (
       <Link
            
            to={`/player`}
           
          >
    <div
      className="SliderContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
    
      <Slider {...settings} className="Slider" style={{}}>
        {" "}
        {carouselData.map((element, index) => {
          if(element.approved)
          {
            return (
            <div
              className="CarouselImages"
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="CarouselItems"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  className="CarouselText"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#030b17",
                    width: imageWidth * 0.2,
                    height: imageWidth * 0.5617,
                    paddingInline: "10px",
                    justifyContent: "flex-start",
                  }}
                >
                  <h2 style={{ color: "white" }}> {element.title} </h2>{" "}
                  <p style={{ color: "rgba(255,255,255,0.5)" }}>
                    {" "}
                    {element.description}{" "}
                  </p>{" "}
                </div>
                <div className="CarouselImageConatiner">
                  <img
                    className="CarouselImage"
                    style={{
                      height: imageWidth * 0.5617,
                      width: imageWidth,
                      objectFit: "stretch",
                    }}
                    src={element.image}
                    alt="Disney+&nbsp;Hotstar"
                  />
                  {console.log(element.approved)}
                </div>{" "}
              </div>{" "}
            </div>
          );
          }
          
        })}{" "}
      </Slider>{" "}
    </div>
    </Link>
  );
 }
 else{
   return(
     <h1>Loading</h1>
   )

 }
 
}
