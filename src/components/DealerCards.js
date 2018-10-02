import React, { Component } from 'react';
import {connect} from 'react-redux'
import SingleDealerCard from './SingleDealerCard'

class DealerCards extends Component{
  render(){

    const dealerLogic = this.props.dealerHand.map(card => card.value).includes("ACE")
    let score = this.props.dealerScore

    const subtractBy = this.props.dealerScore > 21 && dealerLogic ? 10 : 0
    let newScore = score-subtractBy

    console.log("dealer score", newScore)


    return(
      <div>
        <h1>Dealer Hand</h1>
        <div class="flex-container">
          {
            this.props.dealerHand.map(card =>{
              return <SingleDealerCard key={card.code} card={card}/>
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    dealerHand: state.dealerHand,
    dealerScore:  state.dealerScore
  }
}


export default connect(mapStateToProps)(DealerCards)
