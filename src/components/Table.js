import React, { Component, Fragment } from 'react';
import Deck from './Deck'
import Results from './Results'
import PlayerCards from './PlayerCards'
import DealerCards from './DealerCards'
import {connect} from 'react-redux'
import {loadInitialCards, loadCardFromDeck, loadDealerActions, handleScoreWithAce} from '../actions'


class Table extends Component {

  state = {
    stand: false
  }

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
    this.state.stand && this.props.dealerScore < 17 ? this.dealerLogic() : null

    const cardValues = this.props.playerHand.map(card => card.value).includes("ACE")
    let score = this.props.playerScore
    // console.log("card score", score)
    const subtractBy = this.props.playerScore > 21 && cardValues ? 10 : 0
    let newScore = ((score-subtractBy) + this.state.newScore)

    return(
      <div className="CardTable">
        <button disabled={this.props.playerScore >= 21 || this.state.stand} onClick={() => this.props.loadCardFromDeck(this.props.deckId)}>Hit</button>
        <button onClick={() => {
          this.setState({
            stand: true
          })
        }}>Stand</button>

        <DealerCards/>
        <PlayerCards/>
        <Results stand={this.state.stand}/>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    deckId: state.deck.deckId,
    playerScore: state.playerScore,
    playerHand: state.playerHand,
    dealerScore: state.dealerScore
  }
}

export default connect(mapStateToProps, {loadInitialCards, loadCardFromDeck, loadDealerActions, handleScoreWithAce})(Table)
