import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../components/game-kit/Header";
import CardList from "../components/game-kit/CardList";
import { flipCard, restart, flipAll } from "../actions/memory";

class App extends Component {
  render() {
    const { memory, actions } = this.props;

    return (
      <div className="container">
        {/** Here Header to render */}
        <Header
          round={memory.round}
          restart={actions.restart}
          flipAll={actions.flipAll}
        />
        {/** Here Cards get render for game */}
        <CardList cards={memory.cards} flipCard={actions.flipCard} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  memory: state.memory
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ flipCard, restart, flipAll }, dispatch)
});

App.propTypes = {
  memory: PropTypes.object.isRequired,
  actions: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
