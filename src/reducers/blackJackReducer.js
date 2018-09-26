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

    // case CHANGE_MESSAGE:
    // return {exampleMessage: 'Hola Mundo'}
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
    // calculate total, if its greater than 21, check for an ace, if ace -10 and
    // const checkAce = (state.playerHand, state.playerScore) =>{
    //   if (state.playerScore < 21){
    //     state.playerScore += cardValues(action.payload.cards)
    //
    //   }else{
    //     if(state.playerScore > 21){
    //       const cardArray = state.playerHand.map(card => card.value === "ACE")
    //         if(cardArray.includes())
    //     }
    //   }
    // }

    return {
      ...state,
      playerHand: [
        ...state.playerHand, ...action.payload.cards
      ],
      playerScore: state.playerScore += cardValues(action.payload.cards)
    }


    // case 'HANDLE_ACE':
    // return {
    //   ...state,
    //   playerScore: state.playerScore -= 10
    // }

    case 'DEALER_CARDS':
    return {
      ...state,
      dealerHand: [
        ...state.dealerHand, ...action.payload.cards
      ],
      dealerScore: state.dealerHand += cardValues(action.payload.cards)
    }



    default:
    return state
  }
}

export default reducer
