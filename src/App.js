import React from "react";
import "./App.css";
import Editor from "./Editor";
import Previewer from "./Previewer";

class App extends React.Component() {
   render() {
      return (
         <div className="App">
            <Editor />
            <Previewer />
         </div>
      );
   }
}

export default App;
