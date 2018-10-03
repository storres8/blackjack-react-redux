import React, { Component, Fragment } from 'react';
import Deck from './Deck'
import Results from './Results'
import PlayerCards from './PlayerCards'
import DealerCards from './DealerCards'
import {connect} from 'react-redux'
import {loadInitialCards, loadDealerActions, handleScoreWithAce} from '../actions'
import { Button } from 'semantic-ui-react'


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

    ///////////////////////////NEW DEALER SCORE//////////////////////////////////////////
      const dealerLogic = this.props.dealerHand.map(card => card.value).includes("ACE")
      let score = this.props.dealerScore
      const subtractBy = this.props.dealerScore > 21 && dealerLogic ? 10 : 0
      let newScore = score-subtractBy
    /////////////////////////////////////////////////////////////////////////////////

    this.state.stand && newScore < 17 ? this.dealerLogic() : null




    return(
      <div className="CardTable">


        <DealerCards/>
        <Results stand={this.state.stand} />
        <PlayerCards stand={this.state.stand}/>

        <p></p>

        <div class="stand-container">

          <div class="stand-button">
            <button disabled={this.props.stand === true} class='ui red button' onClick={() => {
              this.setState({
                stand: true
              })
            }}>Stand</button>
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
    dealerHand: state.dealerHand
  }
}

export default connect(mapStateToProps, {loadInitialCards, loadDealerActions, handleScoreWithAce})(Table)
