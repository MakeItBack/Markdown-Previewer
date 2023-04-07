const Toolbar = (props) => {
   const styles = { backgroundColor: "lightGrey", padding: "10px 20px", fontWeight: 600 };

   return <div style={styles}>{props.toolbarTitle}</div>;
};

export default Toolbar;
