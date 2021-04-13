import React from 'react';
import logo from "../20201216_134117.jpg";
const Stats=()=>{
    return (
        <div className={"stats"}>
            <header className="App-header">
                <h1>Statistics</h1>
                <table>
                    <tr>
                        <td>Total cycling time:</td>
                        <td>?</td>
                    </tr>
                    <tr>
                        <td>Total distance:</td>
                        <td>?</td>
                    </tr>
                    <tr>
                        <td>Number of bikes:</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Number of falls:</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Average speed:</td>
                        <td>?</td>
                    </tr>
                    <tr>
                        <td>Average km per round:</td>
                        <td>?</td>
                    </tr>
                    <tr>
                        <td>Average number of bystanders commenting:</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Longest distance before jumping off:</td>
                        <td>5 km</td>
                    </tr>
                </table>
            </header>
        </div>
    );
}
export{Stats}