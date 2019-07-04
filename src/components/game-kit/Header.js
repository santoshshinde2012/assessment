import React from "react";
import PropTypes from "prop-types";

const Header = ({ round, restart, flipAll }) => {
  return (
    <div className="header-outer">
      <div className="header-inner">
        <h2>Round: {round}</h2>
      </div>
      <div className="header-inner right">
        <button
          className="button button--warning text-center"
          onClick={() => restart()}
          disabled={round === 0}
        >
          Restart
        </button>
      </div>
      <div className="header-inner right">
        <button
          className="button button--success text-center"
          onClick={() => flipAll()}
          disabled={round === 0}
        >
          Flip All
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  round: PropTypes.number.isRequired,
  restart: PropTypes.func,
  flipAll: PropTypes.func
};

Header.defaultProps = {
  round: 0
};

export default Header;
