import React, { useState } from 'react'

export default function Color() {
    const [redcount, redsetCount] = useState(245);
    const [greencount, greensetCount] = useState(23);
    const [bluecount, bluesetCount] = useState(0);
    const rhandlerIncrement = () => {
        redsetCount(
            (preState) => {
                return (preState + 10) >255 ? alert("Invalid ") :preState + 10;
            }
        );
    }
    const rhandlerDecrement = () => {
        redsetCount(
            (preState) => {
                return preState - 10 <0 ? alert("Invalid ") :preState - 10;
            }
        );
    }

    const ghandlerIncrement = () => {
        greensetCount(
            (preState) => {
                return preState + 10 >255 ? alert("Invalid ") :preState + 10;
            }
        );
    }
    const ghandlerDecrement = () => {
        greensetCount(
            (preState) => {
                return preState - 10<0 ? alert("Invalid ") :preState - 10;
            }
        );
    }

    const bhandlerIncrement = () => {
        bluesetCount(
            (preState) => {
                return preState + 10  >255 ? alert("Invalid ") :preState + 10;
            }
        );
    }
    const bhandlerDecrement = () => {
        bluesetCount(
            (preState) => {
                return preState - 10<0 ? alert("Invalid ") :preState - 10;
            }
        );
    }
    return (
        <div>
            <div style={{ backgroundColor: `rgb(${redcount},${greencount},${bluecount})` }}>
            </div>
            <button>
                <p>Red</p>
                <p>
                    <button onClick={rhandlerIncrement}>+</button>
                    <button onClick={rhandlerDecrement}>-</button>
                </p>
            </button>
            <button>
                <p>Green</p>
                <p>
                    <button onClick={ghandlerIncrement}>+</button>
                    <button onClick={ghandlerDecrement}>-</button>
                </p>
            </button>
            <button>
                <p>Blue</p>
                <p>
                    <button onClick={bhandlerIncrement}>+</button>
                    <button onClick={bhandlerDecrement}>-</button>
                </p>
            </button>


        </div>
    )
}
