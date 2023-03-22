import { FirstPage } from "./components/FirstPage";
import "./index.css"
import React from "react";
import { SecondPage } from "./components/SecondPage";

const App = () => {


    return (
        <div className="App">
            <header className="App-header">
                <FirstPage />
            </header>
            <body>
                <SecondPage/>
            </body>
        </div>
    );

}

export default App;
