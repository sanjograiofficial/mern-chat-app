import React from "react";
import { Route } from "react-router-dom";
import ChatPage from "./pages/Chatpage";
import Homepage from "./pages/Homepage";

function App() {
    return (
        <div className="App">
            <Route path="/" component={Homepage} exact/>
            <Route path="/chat" component={ChatPage} />
        </div>
    );
}

export default App;
