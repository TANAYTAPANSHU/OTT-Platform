import React from 'react';
import ShowCard from "./ShowCard";

const popularShows=[{ image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8774/1028774-v-85c7d8f07559',title:'Anupama',desc:'Despite the many challenges thrown her way, Anupama begins a new chapter of her life post divorce. H ...' },
{image: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4516/1074516-v-2f4f07b1e4ec',title:'Yeh Rishta',desc:'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...'},
{image: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5883/1095883-v-c0fa911c0098',title:'Eternals',desc:'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...'},
{image: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4368/1094368-v-bdcf85c3f505',title:'Eternals',desc:'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...'},
{image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3863/1093863-v-0bcaa3a2beb5',title:'Eternals',desc:'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...'},
{image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6783/1086783-v-987c1faa6265',title:'Eternals',desc:'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...'}]

function MoviesRecommended() {
    return ( <div className ="Trending" style={{display:'flex',flexDirection:'row',alignItems:'center',padding:20,flexWrap:'wrap',justifyContent:'flex-start',  }}>

        {popularShows.map((element,index) =>{
          return(<ShowCard key={index} image={element.image}   title={element.title}  desc={element.desc} />)
    
        } )}

    
        </div>);
}

export default MoviesRecommended;
