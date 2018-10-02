import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import SinglePlayerCard from './SinglePlayerCard'


class PlayerCards extends Component {

  render(){
    const cardValues = this.props.playerHand.map(card => card.value).includes("ACE")
    let score = this.props.playerScore

    const subtractBy = this.props.playerScore > 21 && cardValues ? 10 : 0
    let newScore = score-subtractBy

    console.log("card score", newScore)

    return(
      <div >
        <h1>Player Hand</h1> <h2>Current Score:{newScore}</h2>

        <div class="flex-container">
          {
            this.props.playerHand.map(card =>{
              return <SinglePlayerCard key={card.code} card={card}/>
            })
          }
        </div>

        { newScore > 21 ?
          <Fragment> <h1>Busted!!</h1> <button onClick={() => console.log("clicked")}>Play Again</button> </Fragment> :
          null
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
