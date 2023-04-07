import Toolbar from "./Toolbar";
import { sampleText } from "./sampleText";

const Editor = (props) => {
   return (
      <div className="Editor">
         <Toolbar toolbarTitle="Text Editor Window" />
         <textarea
            id="editor"
            className="Editor-window"
            value={props.editorText !== "" ? props.editorText : sampleText}>
            Editor
         </textarea>
      </div>
   );
};
export default Editor;
