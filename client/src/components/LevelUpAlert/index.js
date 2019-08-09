import React, { Component } from "react";
import "./style.css";


class LevelUpAlert extends Component {
  render() {
    return (
      <div>
        <div className={this.props.LevelUpVisable ? "fadeIn" : "fadeOut"}>
          LEVELED UP
        </div>
      </div>
    );
  }
}

export default LevelUpAlert;
