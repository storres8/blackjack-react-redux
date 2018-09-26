import React, { Component } from 'react';
import {connect} from 'react-redux'
import SinglePlayerCard from './SinglePlayerCard'


class PlayerCards extends Component {

  render(){
    // console.log("players hand", this.handleAce())
    // console.log("players score", this.props.playerScore)

    return(
      <div >
        <h1>Player Hand</h1> <h2>Current Score:{this.props.playerScore}</h2>
        {
          this.props.playerHand.map(card =>{
            return <SinglePlayerCard key={card.code} card={card}/>
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    playerHand: state.playerHand,
    playerScore: state.playerScore
  }
}



export default connect(mapStateToProps)(PlayerCards)
