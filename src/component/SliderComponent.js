import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderComponent.css";
import { useState, useEffect } from "react";

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

  const carouselImages = [
    {image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4939/1094939-h-cc9f80956931",title:'Special Ops 1.5',description:'In the race to make the next money-spinning drug, saving lives takes a backseat and people become less than human. Step into the murky world of drug t...'  },
     {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1836/1101836-h-7217bc694aa9",title:'Anupama',description:'Gautam and Dhara sacrifice a lot to raise his brothers Dev, Shiva and Krish while managing the shop. Will things change once the brothers get married?'  },
   {image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4364/1094364-h-f8cc4f84b6d7",title:'Anupama',description:'Gautam and Dhara sacrifice a lot to raise his brothers Dev, Shiva and Krish while managing the shop. Will things change once the brothers get married?' },
      {image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8773/1028773-h-48170a73363e",title:'Special Ops 1.5',description:'In the race to make the next money-spinning drug, saving lives takes a backseat and people become less than human. Step into the murky world of drug t...'  },
    {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/1756/1000101756/1000101756-h",title:'Special Ops 1.5',description:'In the race to make the next money-spinning drug, saving lives takes a backseat and people become less than human. Step into the murky world of drug t...'  },
   
  ];
  const dimensions = useWindowDimensions();
 
  let imageWidth = dimensions.width * 0.7;
  return (
    <div
      className="SliderContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Slider {...settings} className="Slider" style={{}}>
        {carouselImages.map((element, index) => {
          return (
            <div
              className="CarouselImages"
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
                        <div className="CarouselText" style={{display:'flex',flexDirection:'column', backgroundColor:'#030b17',width: imageWidth*0.2,height:imageWidth * 0.5617,paddingInline:'10px',justifyContent:'flex-start' }}>
                  <h2 style={{color:'white'}}>{element.title}</h2>
                     <p style={{color:'rgba(255,255,255,0.5)',}}>{element.description}</p>
                </div>
              
                <div className="CarouselImageConatiner" >
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
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
