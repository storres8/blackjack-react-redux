import React, { Component } from 'react';
import Deck from './Deck'
import PlayerCards from './PlayerCards'
import DealerCards from './DealerCards'
import {connect} from 'react-redux'
import {loadInitialCards, loadCardFromDeck, handleAceInHand} from '../actions'


class Table extends Component {

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
    // }
    playerBusts = () =>{
      console.log(this.props.playerScore)
    }

  render(){
    // console.log("Player Score",this.props.playerScore);
    return(
      <div className="CardTable">
        {this.playerBusts()}
        <button disabled={this.props.playerScore >= 21} onClick={() => this.props.loadCardFromDeck(this.props.deckId)}>Hit</button>
        <button>Stand</button>
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
    playerHand: state.playerHand
  }
}

export default connect(mapStateToProps, {loadInitialCards, loadCardFromDeck, handleAceInHand})(Table)
