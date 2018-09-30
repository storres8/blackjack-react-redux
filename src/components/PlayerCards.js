import React, { Component } from 'react';
import {connect} from 'react-redux'
import SinglePlayerCard from './SinglePlayerCard'


class PlayerCards extends Component {

  render(){
    // console.log("players hand", this.handleAce())
    // console.log("players score", this.props.playerScore)
    const cardValues = this.props.playerHand.map(card => card.value).includes("ACE")
    let score = this.props.playerScore

    const subtractBy = this.props.playerScore > 21 && cardValues ? 10 : 0
    let newScore = score-subtractBy

    console.log("card score", newScore)


    return(
      <div >
        <h1>Player Hand</h1> <h2>Current Score:{newScore}</h2>
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
