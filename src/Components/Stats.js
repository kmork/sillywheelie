import React from 'react';
import logo from "../20201216_134117.jpg";
const Stats=()=>{
    return (
        <div className={"stats"}>
            <header className="App-header">
                <h1>Statistics</h1>
                <table>
                    <tr align="left">
                        <td>Total cycling time:</td>
                        <td>?</td>
                    </tr>
                    <tr align="left">
                        <td>Total distance:</td>
                        <td>?</td>
                    </tr>
                    <tr align="left">
                        <td>Number of bikes:</td>
                        <td>1</td>
                    </tr>
                    <tr align="left">
                        <td>Number of falls:</td>
                        <td>4</td>
                    </tr>
                    <tr align="left">
                        <td>Number of jumps:</td>
                        <td>0</td>
                    </tr>
                    <tr align="left">
                        <td>Average speed:</td>
                        <td>?</td>
                    </tr>
                    <tr align="left">
                        <td>Average km per round:</td>
                        <td>?</td>
                    </tr>
                    <tr align="left">
                        <td>Max speed:</td>
                        <td>12,5 km/h</td>
                    </tr>
                    <tr align="left">
                        <td>Max ride:</td>
                        <td>33,4 km</td>
                    </tr>
                    <tr align="left">
                        <td>Babies hit & run:</td>
                        <td>0</td>
                    </tr>
                    <tr align="left">
                        <td>Avg num of bystanders commenting:</td>
                        <td>6</td>
                    </tr>
                    <tr align="left">
                        <td>Longest distance before jumping off:</td>
                        <td>5 km</td>
                    </tr>
                </table>
            </header>
        </div>
    );
}
export{Stats}