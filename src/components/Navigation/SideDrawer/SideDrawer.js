import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer",props.isShow? "Open": "Close"];
    return (
        <Aux>
            <BackDrop clicked={props.close} show={props.isShow} />
            <div className={attachedClasses.join(" ")}>
                <div className="Logo1">
                    <Logo />
                </div>
                
                <nav>
                    <NavigationItems />
                </nav>
            </div>

        </Aux>


    );
}

export default sideDrawer;