
import React, { Component } from 'react';
import Board from './Board.js';


class Game extends Component {
    render() {
        return(
            <div className="game">
                <div className="game-board">
                    <Board />
                    <div>
                        <input type="text" className="inputCommand" placeholder="enter your command"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game