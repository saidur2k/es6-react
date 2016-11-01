import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import Home from "./components/Home";

class App extends React.Component {
    render() {
        var userobject =  {
            name: "Anna",
            age: 26,
            hobbies: ['reading', 'writing', 'cooking']
        };
        return (
            <div className="container">
                <div className="row">
                    <Header homelink="Home"/>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Hello World</h1>
                    </div>
                </div>
                <div className="row">
                    <Home initialName={"Test User"} initialAge={25} userobject={userobject}>
                        <p>this is a test paragraph!</p>
                    </Home>
                </div>
            </div>
        );
    }
}
render(<App/>, window.document.getElementById("app"));