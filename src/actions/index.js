import { fetchInitialCards, fetchCardWithDeckId, fetchPlayAgainCards, fetchShuffleCards  } from '../adapters/tableAdapters'

// Define and export your action creators here
// EXAMPLE:


export const loadInitialCards = () =>{
  return (dispatch) =>{
    fetchInitialCards()
    .then(cards => {
      dispatch(setCards(cards))
    })
  }
}

const setCards = (cards) => {
  return {
    type: 'LOAD_CARDS',
    payload: {
      cards
    }
  }
}



export const loadDealerActions = (deckId) =>{
  return (dispatch) =>{
    fetchCardWithDeckId(deckId)
    .then(card =>{
      dispatch(drawDealerCard(card))
    })
  }
}

const drawDealerCard = (cards) => {
  return{
    type: 'DEALER_CARDS',
    payload: {
      cards: cards.cards,
      remaining: cards.remaining
    }
  }
}

export const loadCardFromDeck = (deckId) =>{
  return (dispatch) => {
    fetchCardWithDeckId(deckId)
    .then(card =>{
      dispatch(drawCard(card))
    })
  }
}

const drawCard = (cards) =>{
  return {
    type: 'LOAD_CARD',
    payload:{
      cards: cards.cards,
      remaining: cards.remaining
    }
  }
}


export const loadPlayAgainCards = (deckId) =>{
  return (dispatch) =>{
    fetchPlayAgainCards(deckId)
    .then(cards =>{
      dispatch(playAgain(cards))
    })
  }
}

const playAgain = (cards) =>{
  return{
    type: 'LOAD_NEW_HAND',
    payload:{
      cards: cards.cards,
      deckId: cards.deck_id,
      remaining: cards.remaining
    }
  }
}


export const handleScoreWithAce = () =>{
  return (dispatch) => {
    dispatch(subScore())
  }
}

const subScore = () => {
  return {
    type: 'HANDLE_ACE'
  }
}

export const handleStand = () =>{
  return{
    type: 'HANDLE_STAND'
  }
}
