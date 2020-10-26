import React from 'react';
import Star from './star.js';
import{Link} from'react-router-dom';

const Card=(props)=>{
    return(
    <div className='moviecard'>
        <Link to={`/movie/${props.element.title}`} style={{textDecoration:'none'}}>
        <img src={props.element.imgurl}  className='img'></img>
    <p style={{textAlign:"center" , fontSize:28,color:'white',margin:20,textDecoration:'none'}} >{props.element.title}</p>
    <p className='des' >{props.element.description}</p>
    <p className='des1'>{props.element.posterUrl}</p>
    <Star rating={props.element.rate}/>
        </Link>
    
</div>

    )
}


 
   
export default Card;
 
