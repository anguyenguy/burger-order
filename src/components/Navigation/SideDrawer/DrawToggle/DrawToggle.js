import React from "react";
import "./DrawToggle.css";

const drawerToggle = (props) => {
    return(
        <div className="DrawerToggle" onClick={props.open}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )

}

export default drawerToggle;