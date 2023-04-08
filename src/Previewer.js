import React from "react";
import Toolbar from "./Toolbar";
import { marked } from "marked";

class Previewer extends React.Component {
   constructor(props) {
      super(props);
      this.createHtml = this.createHtml.bind(this);
   }
   createHtml() {
      const input = this.props.editorText;
      const output = marked.parse(input, {
         gfm: true,
         breaks: true,
         headerIds: false,
      });
      return output;
   }
   componentDidUpdate() {
      document.getElementById("preview").innerHTML = this.createHtml();
   }
   componentDidMount() {
      document.getElementById("preview").innerHTML = this.createHtml();
   }
   render() {
      return (
         <div className="Previewer">
            <Toolbar toolbarTitle="Markdown Previewer Window" />
            <div id="preview"></div>
         </div>
      );
   }
}

export default Previewer;
