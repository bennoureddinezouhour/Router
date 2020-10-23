import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
    
   class Star extends React.Component {

   
        render() {
        
          
          return (                
            <div className='star'>
              <StarRatingComponent 
                name="rate1" 
                starCount={10}
                value={this.props.rating}
                emptyStarColor={'white'}
                
              />
            </div>
          );
        }
      }
    



export default Star;