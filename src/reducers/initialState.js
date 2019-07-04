import generateCards from "../data/cards";

const initialState = {
  cards: generateCards(),
  round: 1,
  guess1: null,
  guess2: null
};

export default initialState;
