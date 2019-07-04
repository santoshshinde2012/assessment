import React from "react";
import PropTypes from "prop-types";
import * as images from "../../constants/images";
import classNames from "classnames";

const CardListItem = ({ card, flipCard }) => {
  let cardClass = classNames({
    flipper: true,
    flipped: card.flipped || card.discovered
  });

  const addDefaultSrc = ev => {
    ev.target.src = images.placeholder;
  };

  return (
    <li className="flip-container">
      <div className={cardClass}>
        <div className="front" onClick={() => flipCard(card.id)}></div>
        <div className="back">
          <img src={card.url} alt={card.rel} onError={addDefaultSrc} />
        </div>
      </div>
    </li>
  );
};

CardListItem.propTypes = {
  card: PropTypes.object.isRequired,
  flipCard: PropTypes.func
};

CardListItem.defaultProps = {};

export default CardListItem;
