import React from "react";
import Toolbar from "./Toolbar";

class Previewer extends React.Component {
   componentDidUpdate() {
      document.getElementById("preview").innerHTML = this.props.htmlString;
   }
   componentDidMount() {
      document.getElementById("preview").innerHTML = this.props.htmlString;
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
