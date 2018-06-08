
import React, { Component } from 'react'
import Square from './Square.js';
import Robot from './Robot.js'


class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    }

    renderSquare() {
        return (
            <Square 
            />
        );
    }

    render() {
        const row = [1, 2, 3, 4, 5]
        const column = [1, 2, 3, 4, 5]
        return(
            <div>
                {
                    row.map( index => (
                        <div className="board-row">
                            {
                                column.map( index => (
                                    <Square 
                                        key={index}
                                    />
                                ))
                            }
                        {
                            index === 5 && (<Robot />)
                        }
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Board