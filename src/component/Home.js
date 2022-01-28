import React from 'react';
import ShowCard from './ShowCard';
import SliderComponent from './SliderComponent';
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"
import TrendingCategory from './TrendingCategory';
import PopularShows from './PopularShows';

function Home() {
 


  
return (
    <div className="HomePage" style={{
      
backgroundColor: '#0c111b'
    }}>
        <SliderComponent/>
        {/* Trending Category */}
        <h3 style={{textAlign:'left',color:'white',paddingInline:20}}>Trending Now</h3>
       <TrendingCategory />
             {/* Popular Shows */}
  <h3 style={{textAlign:'left',color:'white',paddingInline:20}}>Popular Shows</h3>
       <PopularShows />

       <h3 style={{textAlign:'left',color:'white',paddingInline:20}}>Movies Recommended for you</h3>
       <PopularShows />



  </div>
  ) 
}

export default Home;

