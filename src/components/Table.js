import React, { Component } from 'react';
import Deck from './Deck'
import PlayerCards from './PlayerCards'
import DealerCards from './DealerCards'
import {connect} from 'react-redux'
import {loadInitialCards, loadCardFromDeck, loadDealerActions} from '../actions'


class Table extends Component {

  state = {
    stand: false
  }

  componentDidMount(){
    this.props.loadInitialCards()
  }

  // checkForAce = () => {
    // check players score (this.props.playerScore >= 21)
    // check user hand for ace change score
    // this.props.playerHand.filter(card => card.value === "ACE").forEach(card =>{

  //   console.log(this.props.playerHand)
  //
  //   if(this.props.playerScore > 21){
  //     this.props.playerHand.filter(card =>{ return card.value === "ACE"})
  //   }
  // }

    //     (this.props.playerHand.includes(card => card.value === "ACE"))
    //   }else{
    //
    //   }
    //       debugger
    //       this.props.handleAceInHand()
    //     }
    // }
    //   // return this.props.playerScore
    //

  dealerLogic = () =>{
    this.props.loadDealerActions(this.props.deckId)
  }


  render(){
    this.state.stand && this.props.dealerScore < 17 ? this.dealerLogic() : console.log('dealer stands')
    return(
      <div className="CardTable">
        <button disabled={this.props.playerScore >= 21} onClick={() => this.props.loadCardFromDeck(this.props.deckId)}>Hit</button>
        <button onClick={() => {
          this.setState({
            stand: true
          })
        }}>Stand</button>
        <PlayerCards/>
        <DealerCards/>
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

export default connect(mapStateToProps, {loadInitialCards, loadCardFromDeck, loadDealerActions})(Table)
