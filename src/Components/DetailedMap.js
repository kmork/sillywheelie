import React from 'react';
import map from "../20210409_172904.jpg";
const DetailedMap=()=>{
    return (
        <div className="detailedMap">
            <header className="App-header">
                <h1>Roads completed</h1>
                <img src={map} className="App-logo" alt="map" />
            </header>
        </div>
    );
}
export{DetailedMap}