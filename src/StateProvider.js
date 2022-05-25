import { useState, createContext, useContext } from 'react';
import initialCards from './cards-data';

const StateContext = createContext();

export function StateProvider({ children }) {
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  const state = {
    deck,
    setDeck,
    playerOneHand,
    setPlayerOneHand,
    playerTwoHand,
    setPlayerTwoHand,
    playerThreeHand,
    setPlayerThreeHand,
    selectedCard,
    setSelectedCard,
    from,
    setFrom,
    to,
    setTo,
  };

  return <StateContext.Provider value={state}>{children}</StateContext.Provider>;
}

export function useStateContext() {
  return useContext(StateContext);
}
