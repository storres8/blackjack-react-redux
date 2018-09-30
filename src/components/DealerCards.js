import React, { Component } from 'react';
import {connect} from 'react-redux'
import SingleDealerCard from './SingleDealerCard'

class DealerCards extends Component{
  render(){
    return(
      <div>
        <h1>Dealer Hand</h1>
      {
        this.props.dealerHand.map(card =>{
          return <SingleDealerCard key={card.code} card={card}/>
        })
      }
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    dealerHand: state.dealerHand,
  }
}


export default connect(mapStateToProps)(DealerCards)
