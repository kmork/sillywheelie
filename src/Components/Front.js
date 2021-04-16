import React from 'react';
import logo from "../20201216_134117.jpg";
const Front=()=>{
    return (
        <div className={"front"}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <br/>
                <p>"We are all clowns" - <i>The Joker</i></p>
            </header>
        </div>
    );
}
export{Front}