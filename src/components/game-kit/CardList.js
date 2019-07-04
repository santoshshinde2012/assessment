import React from "react";
import PropTypes from "prop-types";
import CardListItem from "./CardListItem";

const CardList = ({ cards, flipCard }) => {
  return (
    <div>
      <ul className="deck" id="card-deck">
        {cards.map(item => (
          <CardListItem
            key={item.id}
            card={item}
            flipCard={flipCard}
          ></CardListItem>
        ))}
      </ul>
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  flipCard: PropTypes.func
};

CardList.defaultProps = {
  cards: []
};

export default CardList;
