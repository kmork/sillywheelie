import React from 'react';
import map from "../20210409_172904.jpg";
const DetailedMap=()=>{
    return (
        <div className="detailedMap">
            <header className="App-header">
                <h2>Roads completed</h2>
                <img src={map} className="App-logo" alt="map" />
            </header>
        </div>
    );
}
export{DetailedMap}