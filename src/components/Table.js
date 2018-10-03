import React, { Component, Fragment } from 'react';
import Deck from './Deck'
import Results from './Results'
import PlayerCards from './PlayerCards'
import DealerCards from './DealerCards'
import {connect} from 'react-redux'
import {loadInitialCards, loadDealerActions, handleScoreWithAce, handleStand} from '../actions'
import { Button } from 'semantic-ui-react'


class Table extends Component {

  componentDidMount(){
    this.props.loadInitialCards()
  }

  dealerLogic = () =>{
    this.props.loadDealerActions(this.props.deckId)
  }

  Ace = () => {
    this.props.handleScoreWithAce()
  }


  render(){

    ///////////////////////////NEW DEALER SCORE//////////////////////////////////////////
      const dealerLogic = this.props.dealerHand.map(card => card.value).includes("ACE")
      let score = this.props.dealerScore
      const subtractBy = this.props.dealerScore > 21 && dealerLogic ? 10 : 0
      let newScore = score-subtractBy
    /////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////NEW PLAYER SCORE//////////////////////////////////////
    const cardValuesPlayer = this.props.playerHand.map(card => card.value).includes("ACE")
    let playerScore = this.props.playerScore

    const playerSubtractBy = this.props.playerScore > 21 && cardValuesPlayer ? 10 : 0
    let newScorePlayer = playerScore-playerSubtractBy

    // console.log("card score in RESULTS", newScorePlayer)
    ///////////////////////////////////////////////////////////////////////////////////

    this.props.stand && newScore < 17 ? this.dealerLogic() : null

    return(
      <div className="CardTable">


        <DealerCards/>
        <Results />
        <PlayerCards />

        <p></p>

        <div class="stand-container">

          <div class="stand-button">
            <button disabled={this.props.stand === true || newScorePlayer >= 21} class='ui red button' onClick={() => {this.props.handleStand()}}>Stand</button>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    deckId: state.deck.deckId,
    playerScore: state.playerScore,
    playerHand: state.playerHand,
    dealerScore: state.dealerScore,
    dealerHand: state.dealerHand,
    stand: state.stand
  }
}

export default connect(mapStateToProps, {loadInitialCards, loadDealerActions, handleScoreWithAce, handleStand})(Table)
