import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles/GettingStarted.css";
import globalStyles from "../../globalStyles.css";

class GettingStarted extends Component {
  clickHandler = () => {
    const { history } = this.props;
    history.push("/Signin");
  };

  render() {
    return (
      <div class="signin-signup-page">
        <div className="getting-started-page--title">
          <h1>Food for Everyone</h1>
        </div>
        <button
          type="button"
          className="getting-started-page--button"
          onClick={this.clickHandler}
        >
          Get Started
        </button>
      </div>
    );
  }
}

GettingStarted.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default GettingStarted;
