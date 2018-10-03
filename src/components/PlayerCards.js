import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import SinglePlayerCard from './SinglePlayerCard'
import {loadCardFromDeck} from '../actions'

class PlayerCards extends Component {
  state = {
    stand: false
  }

  render(){
    const cardValuesPlayer = this.props.playerHand.map(card => card.value).includes("ACE")
    let playerScore = this.props.playerScore

    const playerSubtractBy = this.props.playerScore > 21 && cardValuesPlayer ? 10 : 0
    let newScorePlayer = playerScore-playerSubtractBy

    // console.log("card score", newScorePlayer)

    return(
      <div >
        <h1>Player Hand</h1> <h2>Current Score:{newScorePlayer}</h2>

        <div class="player-container">

          <div className="player-cards">
          {
            this.props.playerHand.map(card =>{
              return <SinglePlayerCard key={card.code} card={card}/>
            })
          }
        </div>

        <div class="player-hit-button">
          <button  class='ui blue button' disabled={newScorePlayer >= 21 || this.props.stand} onClick={() => this.props.loadCardFromDeck(this.props.deckId)} >HIT</button>
        </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    playerHand: state.playerHand,
    playerScore: state.playerScore,
    deckId: state.deck.deckId
  }
}



export default connect(mapStateToProps,{loadCardFromDeck})(PlayerCards)
