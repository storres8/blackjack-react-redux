import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {loadCardFromDeck} from '../actions'

class Results extends Component {


  render(){
    console.log("stand clicked?",this.props.stand)
    // console.log("player's score",this.props.playerScore)
    // console.log("dealer's score",this.props.dealerScore)
  const playerScore = this.props.playerScore
  const dealerScore = this.props.dealerScore

    return(
      <div>
        {dealerScore > 21 ? <h1>DEALER BUSTED! YOU WIN!</h1> : null}
        {playerScore === 21 ? <h1>BLACKJACK YOU WIN!</h1> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    playerScore: state.playerScore,
    dealerScore: state.dealerScore,
    deckId: state.deck.deckId
  }
}

export default connect(mapStateToProps, {loadCardFromDeck})(Results)
