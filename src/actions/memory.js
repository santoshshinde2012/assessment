import { FLIP_CARD, RESTART_GAME, FLIP_ALL } from "../constants/memory";

const flipCard = id => ({
  type: FLIP_CARD,
  id
});

const restart = () => ({
  type: RESTART_GAME
});

const flipAll = () => ({
  type: FLIP_ALL
});

export { flipCard, restart, flipAll };
