import Toolbar from "./Toolbar";

const Previewer = (props) => {
   return (
      <div className="Previewer">
         <Toolbar toolbarTitle="Markdown Previewer Window" />
         <div id="preview" className="Previewer-window">
            {props.previewText}
         </div>
      </div>
   );
};

export default Previewer;
