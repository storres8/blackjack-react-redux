// a reducer is a PURE function that takes the previous state and an action as arguments and returns new state based on the action.type
import { /* your type here, CHANGE_MESSAGE */ } from '../actions/types'



const initialState = {
  deck: {
    deckId: ""
  },
  playerHand:[],
  dealerHand:[],
  playerScore: 0,
  dealerScore: 0,
  user:{}
}

const cardValues = (cards) => {
  // console.log(this.props);
  var total = 0
    cards.forEach(card =>{
     if (card.value === "JACK"){
      total += 10
    }else if( card.value ==="QUEEN"){
      total += 10
    }else if(card.value === "KING"){
      total += 10
    } else if(card.value === "ACE"){
      total += 11
    } else {
      total += parseInt(card.value)
    }

  })
  return total
}


const reducer = (state = initialState, action) => {
  switch (action.type){

    case 'LOAD_CARDS':
    return {
      ...state,
      deck: {
        ...state.deck,
        deckId: action.payload.cards.deck_id
      },
      playerHand: action.payload.cards.cards.slice(0,2),
      dealerHand: action.payload.cards.cards.slice(2,4),
      playerScore: cardValues(action.payload.cards.cards.slice(0,2)),
      dealerScore: cardValues(action.payload.cards.cards.slice(2,4))
    }

    case 'LOAD_CARD':

    return {
      ...state,
      playerHand: [
        ...state.playerHand, ...action.payload.cards
      ],
      playerScore: state.playerScore += cardValues(action.payload.cards)
    }


    case 'DEALER_CARDS':
    return {
      ...state,
      dealerHand: [
        ...state.dealerHand, ...action.payload.cards
      ],
      dealerScore: state.dealerScore += cardValues(action.payload.cards)
    }

    case 'HANDLE_ACE':
    return {
      ...state,
        playerScore: state.playerScore - 10
    }

    default:
    return state
  }
}

export default reducer
