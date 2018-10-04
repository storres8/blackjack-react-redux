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
      return <Fragment>
        <div class="outcome_you_win">
        <h1 id="result_busted"> YOU WIN! </h1>
        <div className="button_place_you_win"><button className="ui violet button" onClick={() => this.props.loadPlayAgainCards(this.props.deckId)}>Play Again</button></div>
        </div>
      </Fragment>
    }else if(newScorePlayer < newScoreDealer){
      return <Fragment>
        <div class="outcome_text_dealer_W">
          <h1 id="result_busted" className="text-focus-in" > DEALER WINS! </h1>
          <div className="button_place_dealer_W"> <button className="ui violet button" onClick={() => this.props.loadPlayAgainCards(this.props.deckId)}>Play Again</button> </div>
        </div>
        </Fragment>
    }else if(newScorePlayer === newScoreDealer){
      return <Fragment>
        <div class="outcome_draw">
        <h1 id="result_busted"> DRAW! </h1>
        <div className="button_place_draw"><button className="ui violet button" onClick={() => this.props.loadPlayAgainCards(this.props.deckId)}>Play Again</button></div>
      </div>
      </Fragment>
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
// this.props.loadPlayAgainCards(this.props.deckId)
///////////////////////////////////////////////////////////////////////////////////
// console.log("stand",this.props.stand)
    return(
      <div class="results">
        <div class="box">
          <div class="box_text">

            <div class="outcome_text_dealer_busted">
            {
              newScoreDealer > 21 && this.props.stand === true ?
              <Fragment>
                <h1 id="result_dealer_busted" className="text-focus-in"> DEALER BUSTED! YOU WIN!</h1>
                  <div className="button_place_dealer_busted"> <button className="ui violet button" onClick={() => this.props.loadPlayAgainCards(this.props.deckId)}>Play Again</button> </div>
              </Fragment> :
              null
            }
          </div>

              {
                newScorePlayer > 21 ?
                <Fragment>
                    <h1 id="result_busted" className="text-focus-in"> BUSTED! </h1>
                    <div> <button className="ui violet button" onClick={() => this.props.loadPlayAgainCards(this.props.deckId)}>Play Again</button></div>
                </Fragment> :
                null
              }

            <div class="outcome_text_BJP">
            {
              newScorePlayer === 21 ?
              <Fragment>
                <h1 id="result_busted" className="text-focus-in"> BLACKJACK! YOU WIN! </h1>
                <div className="button_place_BJP"><button className="ui violet button"  onClick={() => this.props.loadPlayAgainCards(this.props.deckId)}>Play Again</button></div>
              </Fragment> :
              null
            }
            </div>

            <div class="outcome_text_BJD">
            {
              newScoreDealer === 21 && this.props.stand === true ?
              <Fragment>
                <h1 id="result_busted"> BLACKJACK! DEALER WINS! </h1>
                <div className="button_place_BJD"><button className="ui violet button" onClick={() => this.props.loadPlayAgainCards(this.props.deckId)}>Play Again</button></div>
              </Fragment> :
              null
            }
            </div>
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
