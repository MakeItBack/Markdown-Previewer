import Toolbar from "./Toolbar";

const Editor = (props) => {
   return (
      <div className="Editor">
         <Toolbar toolbarTitle="Text Editor Window" />
         <textarea id="editor" onChange={props.updateEditor}>
            {props.editorText}
         </textarea>
      </div>
   );
};
export default Editor;
