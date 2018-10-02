import React, {Component} from 'react';

class SinglePlayerCard extends Component{


  render(){
    // console.log(this.props.card.value);
    return(
      <div >
        <div >
          <div><img src={this.props.card.image} className="slide-in-bottom"/></div>
        </div>
      </div>
    )
  }
}

export default SinglePlayerCard
