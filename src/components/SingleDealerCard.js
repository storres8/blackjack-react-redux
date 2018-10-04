import React, {Component} from 'react';

class SingleDealerCard extends Component{

  render(){

    return(
      <div >
        <img src={this.props.card.image} className="slide-in-top" />
      </div>
    )
  }
}

export default SingleDealerCard
