import React from 'react';
import ShowCard from './ShowCard';
import SliderComponent from './SliderComponent';

function Home() {
  const trending = [{ image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1837/1101837-v-6d58f6a29934',title:'Human',desc:'In the race to make the next money-spinning drug, saving lives takes a backseat and people become le ...' },
{image: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7519/1097519-v-7235f9a4b235',title:'Eternals',desc:'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...'},
{image: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5883/1095883-v-c0fa911c0098',title:'Eternals',desc:'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...'},
{image: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4368/1094368-v-bdcf85c3f505',title:'Eternals',desc:'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...'},
{image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3863/1093863-v-0bcaa3a2beb5',title:'Eternals',desc:'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...'},
{image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6783/1086783-v-987c1faa6265',title:'Eternals',desc:'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...'}
]

const popularShows=[{ image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8774/1028774-v-85c7d8f07559',title:'Anupama',desc:'Despite the many challenges thrown her way, Anupama begins a new chapter of her life post divorce. H ...' },
{image: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4516/1074516-v-2f4f07b1e4ec',title:'Yeh Rishta',desc:'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...'},
{image: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5883/1095883-v-c0fa911c0098',title:'Eternals',desc:'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...'},
{image: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4368/1094368-v-bdcf85c3f505',title:'Eternals',desc:'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...'},
{image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3863/1093863-v-0bcaa3a2beb5',title:'Eternals',desc:'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...'},
{image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6783/1086783-v-987c1faa6265',title:'Eternals',desc:'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...'}]
  
return (
    <div className="HomePage" style={{
      
backgroundColor: '#0c111b'
    }}>
        <SliderComponent/>
        {/* Trending Category */}
        <h3 style={{textAlign:'left',color:'white',paddingInline:20}}>Trending Now</h3>
        <div className ="Trending" style={{display:'flex',flexDirection:'row',alignItems:'center',padding:20,flexWrap:'wrap',justifyContent:'flex-start',  }}>

        {trending.map((element,index) =>{
          return(<ShowCard key={index} image={element.image}   title={element.title}  desc={element.desc} />)
    
        } )}
        </div>

  <h3 style={{textAlign:'left',color:'white',paddingInline:20}}>Popular Shows</h3>
        <div className ="Trending" style={{display:'flex',flexDirection:'row',alignItems:'center',padding:20,flexWrap:'wrap',justifyContent:'flex-start',  }}>

        {popularShows.map((element,index) =>{
          return(<ShowCard key={index} image={element.image}   title={element.title}  desc={element.desc} />)
    
        } )}

    
        </div>
  </div>
  ) 
}

export default Home;

