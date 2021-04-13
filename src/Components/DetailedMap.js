import React from 'react';
import map from "../20210409_172904.jpg";
const DetailedMap=()=>{
    return (
        <div className="detailedMap">
            <header className="App-header">
                <h1>Level 1: Inside Ring 3</h1>
                <img src={map} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}
export{DetailedMap}