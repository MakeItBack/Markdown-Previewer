import React from "react";
import { marked } from "marked";
import "./App.css";
import "./Previewer.css";
import "./Editor.css";
import Editor from "./Editor";
import Previewer from "./Previewer";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = { editorText: "", previewText: "hbcdvxzvbxcnBVC" };
   }
   render() {
      return (
         <div className="App">
            <Editor editorText={this.state.editorText} />
            <Previewer previewText={this.state.previewText} />
         </div>
      );
   }
}

export default App;
