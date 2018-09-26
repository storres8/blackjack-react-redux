import React, {Component} from 'react';

class SinglePlayerCard extends Component{


  render(){
    // console.log(this.props.card.value);
    return(
      <div className="slide-in-bottom">
        <img src={this.props.card.image}/>
      </div>
    )
  }
}

export default SinglePlayerCard
