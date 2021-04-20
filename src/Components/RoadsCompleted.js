import React from 'react';
import roadsData from './roadsData.js';

const RoadsCompleted=()=>{
    return (
        <div className="roads">
            <header className="App-header">
                <h1>Roads completed</h1>
                <small>
                <table>
                    {
                        roadsData.filter((item) => item.completed).map((item, i) => {
                            return (
                                <tr><td>{item.name}</td></tr>
                        )
                    })
                    }
                </table>
                </small>
            </header>
        </div>
    );
}
export{RoadsCompleted}


