import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawToggle from "../SideDrawer/DrawToggle/DrawToggle";

const toolbar = (props) => {
    return(
        <header className="Toolbar">
            <DrawToggle open = {props.openSide}/>
            <div className="Logo2">
                <Logo />
            </div>
            <nav className="DesktopOnly">
                 <NavigationItems />
            </nav>    
            
        </header>

    );

}

export default toolbar;