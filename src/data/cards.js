/**
 * Here we have to create random cards
 *
 */
export default () => {
  let cards = [];

  for (let i = 0; i < 16; i += 2) {
    let index = Math.floor(Math.random() * 1000);

    cards.push({
      id: i,
      rel: i + 1,
      flipped: false,
      url: `https://picsum.photos/176/176?image=${index}`,
      discovered: false
    });
    cards.push({
      id: i + 1,
      rel: i,
      flipped: false,
      url: `https://picsum.photos/176/176?image=${index}`,
      discovered: false
    });
  }

  return shuffle(cards);
};

// @description shuffles cards
// @param {array}
// @returns shuffledarray
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
