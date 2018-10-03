import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {loadCardFromDeck, loadPlayAgainCards, loadInitialCards} from '../actions'

class Results extends Component {

  handleEmpty = () =>{
    if(this.props.remaining <= 10 && this.props.stand === true){
      return this.props.loadInitialCards()
    }else{
      null
    }
  }

  result = (newScorePlayer, newScoreDealer) => {
  if(this.props.stand === true && newScoreDealer >= 17 && newScoreDealer < 21 && newScorePlayer < 21){
    if(newScorePlayer > newScoreDealer){
      return <Fragment> <h1> YOU WIN! </h1> <button onClick={() => this.props.loadPlayAgainCards(this.props.deckId)}>Play Again</button> </Fragment>
    }else if(newScorePlayer < newScoreDealer){
      return <Fragment> <h1> DEALER WINS! </h1> <button onClick={() => this.props.loadPlayAgainCards(this.props.deckId)}>Play Again</button></Fragment>
    }else if(newScorePlayer === newScoreDealer){
      return <Fragment> <h1> DRAW! </h1> <button onClick={() => this.props.loadPlayAgainCards(this.props.deckId)}>Play Again</button></Fragment>
    }else{
      null
    }
  }else{
    null
  }
}
  render(){
  const playerScore2 = this.props.playerScore
  const dealerScore = this.props.dealerScore

///////////////////////////NEW DEALER SCORE//////////////////////////////////////////
  const dealerLogic = this.props.dealerHand.map(card => card.value).includes("ACE")
  let score = this.props.dealerScore
  const subtractBy = this.props.dealerScore > 21 && dealerLogic ? 10 : 0
  let newScoreDealer = score-subtractBy
////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////NEW PLAYER SCORE//////////////////////////////////////
const cardValuesPlayer = this.props.playerHand.map(card => card.value).includes("ACE")
let playerScore = this.props.playerScore

const playerSubtractBy = this.props.playerScore > 21 && cardValuesPlayer ? 10 : 0
let newScorePlayer = playerScore-playerSubtractBy

// console.log("card score in RESULTS", newScorePlayer)
///////////////////////////////////////////////////////////////////////////////////
// console.log("stand",this.props.stand)
    return(
      <div class="results">
        <div class="box">
          <div class="box_text">
            { newScoreDealer > 21 && this.props.stand === true ?
              <Fragment>
                <h1>DEALER BUSTED! YOU WIN!</h1>
                <button onClick={() => this.props.loadPlayAgainCards(this.props.deckId)}>Play Again</button>
              </Fragment> :
              null
            }
            {
              newScorePlayer > 21 ?
              <Fragment>
                <h1> BUSTED! </h1>
                <button onClick={() => this.props.loadPlayAgainCards(this.props.deckId)}>Play Again</button>
              </Fragment> :
              null
            }
            {
              newScorePlayer === 21 ?
              <Fragment>
                <h1> BLACKJACK! YOU WIN! </h1>
                <button onClick={() => this.props.loadPlayAgainCards(this.props.deckId)}>Play Again</button>
              </Fragment> :
              null
            }
            {
              newScoreDealer === 21 && this.props.stand === true ?
              <Fragment>
                <h1> BLACKJACK! DEALER WINS! </h1>
                <button onClick={() => this.props.loadPlayAgainCards(this.props.deckId)}>Play Again</button>
              </Fragment> :
              null
            }
            {
              this.result(newScorePlayer, newScoreDealer)
            }
            {this.handleEmpty()}

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    playerScore: state.playerScore,
    playerHand: state.playerHand,
    dealerHand: state.dealerHand,
    dealerScore: state.dealerScore,
    deckId: state.deck.deckId,
    remaining: state.deck.remaining,
    stand: state.stand
  }
}

export default connect(mapStateToProps, {loadCardFromDeck, loadPlayAgainCards, loadInitialCards})(Results)
