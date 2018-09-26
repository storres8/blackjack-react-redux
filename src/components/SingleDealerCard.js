import React, {Component} from 'react';

class SinglePlayerCard extends Component{

  render(){
    // console.log(this.props);
    return(
      <div >
        <img src={this.props.card.image}/>
      </div>
    )
  }
}

export default SinglePlayerCard
