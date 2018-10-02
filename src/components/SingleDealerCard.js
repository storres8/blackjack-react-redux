import React, {Component} from 'react';

class SinglePlayerCard extends Component{

  render(){
    // console.log(this.props);
    return(
      <div >
        <img src={this.props.card.image} className="slide-in-top" />
      </div>
    )
  }
}

export default SinglePlayerCard
