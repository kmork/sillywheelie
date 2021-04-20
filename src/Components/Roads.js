import React from 'react';
import roadsData from './roadsData.js';

const Roads=()=>{
    return (
        <div className="roads">
            <header className="App-header">
                <h1>Roads to complete</h1>
                <small>
                <table>
                    {
                        roadsData.filter((item) => !item.completed).map((item, i) => {
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
export{Roads}


