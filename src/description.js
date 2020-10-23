import React from 'react';
import{link} from'react-router-dom';
import { useHistory } from "react-router-dom"
const Description=(props)=>{
    const history = useHistory();
    const goHome = () => { 
      history.push("/");
    };
  
    
    return (
        <div className='centrer'>
        <h1 >Description : </h1>
       <p style={{fontSize:18}} >{props.des}</p>
       <h1>Trailer link : </h1>
       <p style={{fontSize:18}} >{props.url}</p>
       <button className="btn btn-secondary mt-4" onClick={goHome}>Logout</button>
       </div>
    )
}
export default Description