import React, {Component} from "react";
import "./style.css";


class GlobalHighWords extends Component {
    render() {
        return (
            <div>
                {this.props.globalHighWords.map((item, i) => {
                    const rowColor = i % 2 === 0 ? 'row even-row' : 'row odd-row'
                    return (
                        <div className={rowColor}>
                            <div className="col-lg-1 col-md-1 score-chart">{item.scorePosition}.</div>
                            <div className="col-lg-4 col-md-4 score-chart">{item.Player.playerName}</div>
                            <div className="col-lg-4 col-md-4 score-chart">{item.highestWord}</div>
                            <div className="col-lg-2 col-md-2 score-chart text-right">{item.score}</div>

                        </div>)
                })} </div>)

    }
}


export default GlobalHighWords;