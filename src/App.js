import React from "react";
import "./App.css";
import "./Previewer.css";
import "./Editor.css";
import Editor from "./Editor";
import Previewer from "./Previewer";
import { sampleText } from "./sampleText";
import { marked } from "marked";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = { editorText: sampleText, htmlString: "<p>Default</p>" };
      this.updateEditor = this.updateEditor.bind(this);
      this.createHtml = this.createHtml.bind(this);
   }
   // create an HTML string from (markdown) text and update in state
   createHtml(text) {
      const output = marked.parse(text, {
         gfm: true,
         breaks: true,
         headerIds: false,
      });
      this.setState({ editorText: this.state.editorText, htmlString: output });
   }
   // Initialise the HTML string from the default text in state
   componentWillMount() {
      this.createHtml(this.state.editorText);
   }
   // When the text is updated in the browser update the text and HTML in state
   updateEditor(event) {
      const input = event.target.value;
      this.setState({ editorText: input, htmlString: this.state.htmlString });
      this.createHtml(input);
   }
   render() {
      return (
         <div className="App">
            <Editor editorText={this.state.editorText} updateEditor={this.updateEditor} />
            <Previewer htmlString={this.state.htmlString} />
         </div>
      );
   }
}

export default App;
