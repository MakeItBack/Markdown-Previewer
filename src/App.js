import React from "react";
import "./App.css";
import "./Previewer.css";
import "./Editor.css";
import Editor from "./Editor";
import Previewer from "./Previewer";
import { sampleText } from "./sampleText";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = { editorText: sampleText };
      this.updateEditor = this.updateEditor.bind(this);
   }
   updateEditor(event) {
      const input = event.target.value;
      this.setState({ editorText: input });
   }
   render() {
      return (
         <div className="App">
            <Editor editorText={this.state.editorText} updateEditor={this.updateEditor} />
            <Previewer editorText={this.state.editorText} />
         </div>
      );
   }
}

export default App;
