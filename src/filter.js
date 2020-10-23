import React from "react";
import mvsearch from './mvsearch.png';
import Star from'./starrating.js';



const Filter=(props)=>{

   /**let filter=props.mvlist.filter(
    (x)=>
    {return(
      x.title.indexOf(props.fc))
    }
  )
   const search=()=>{
     return(  <div>
      {filter.map(card=>
      <Card element={card}/>)
        }
       </div> )
      }**/
  
     
    return(
     <div  className='filter'>
      <img src={mvsearch} style={{height:80, marginLeft:20}}/>
      <input type="text" placeholder="Search for movie by title " className='title' onChange={(e)=>props.fc(e.target.value)} />
      <Star value={props.fc2}/> 
    </div>
    )




}
export default Filter;