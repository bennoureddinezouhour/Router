import React from "react";
import Card from './card.js';


const List=(props)=>{
 
     return(
       <>
       <div className='listmovie'>
      {props.mvlist.map(card=>
      <Card element={card}/>)
        }
       </div>
       </>  
  )
}
export default List;