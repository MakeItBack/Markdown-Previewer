const Toolbar = (props) => {
   const styles = {
      backgroundColor: "lightGrey",
      padding: "10px 20px",
      fontWeight: 600,
      borderRadius: "0 20px 0 0",
   };

   return (
      <div style={styles}>
         <p style={{ display: "inline-block", margin: 0 }}>{props.toolbarTitle}</p>
         {/* <p
            style={{
               display: "block",
               margin: 0,
               float: "right",
               cursor: "pointer",
               color: "darkBlue",
            }}>
            000
         </p> */}
      </div>
   );
};

export default Toolbar;
