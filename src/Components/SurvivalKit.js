import React from 'react';
import pen from "../pen.png";
import book from "../loe.jpg";
import korona from "../korona.png";
import uni from "../unicycle.png";
import map from "../20210409_172904.jpg";

const Survival=()=>{
    return (
        <div className={"survival"}>
            <header className="App-header">
                <h2>Survival kit</h2>
                <table className="wide-border">
                    <tr>
                        <td colSpan="5">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <img src={book}/><br/>
                            One faith
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>
                            <img src={map} className="small-images"/><br/>
                            One printed map<br/><small>Oslo, type large</small>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>
                            <img src={uni} className="small-images"/><br/>
                            One unicycle <br/><small>Kris Holm muni 26.5 inches</small>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="5">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <img src={pen} className="small-images"/><br/>
                            One marker pen<br/><small>color black</small>
                        </td>
                        <td>&nbsp;</td>
                        <td colSpan="3">
                            <img src={korona} className="small-images"/><br/>
                            One korona-infested city<br/><small>with no alternatives of having fun</small>
                        </td>
                    </tr>
                </table>
            </header>
        </div>
    );
}
export{Survival}