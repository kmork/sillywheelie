import React from 'react';
import logo from "../20201216_134117.jpg";
const Front=()=>{
    return (
        <div className={"front"}>
            <header className="App-header">
                <h4><i>Trunk-based production presents...</i></h4>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Silly Wheelie</h1>
                <p>"We are all clowns" - <i>The Joker</i></p>
            </header>
        </div>
    );
}
export{Front}