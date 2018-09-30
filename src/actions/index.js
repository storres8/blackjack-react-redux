import { fetchInitialCards, fetchCardWithDeckId } from '../adapters/tableAdapters'

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
      dispatch(drawDealerCard(card.cards))
    })
  }
}

const drawDealerCard = (cards) => {
  return{
    type: 'DEALER_CARDS',
    payload: {
      cards
    }
  }
}

export const loadCardFromDeck = (deckId) =>{
  return (dispatch) => {
    fetchCardWithDeckId(deckId)
    .then(card =>{
      dispatch(drawCard(card.cards))
    })
  }
}

const drawCard = (cards) =>{
  return {
    type: 'LOAD_CARD',
    payload:{
      cards
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
