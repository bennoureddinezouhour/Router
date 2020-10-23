import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
    
   class Star extends React.Component {


    constructor() {
      super();
   
      this.state = {
        rating: 0
      };
    }
   
    onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
    }
        render() {
         
          return (                
            <div className='star'>
              <StarRatingComponent 
                name="rate1" 
                starCount={10}
                value={this.props.value (this.state.rating)}
                onStarClick={this.onStarClick.bind(this)}
                emptyStarColor={'white'}
                
              />
            </div>
          );
        }
      }
    



export default Star;