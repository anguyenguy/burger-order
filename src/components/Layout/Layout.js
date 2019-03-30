import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component{
    state = {
        showSideDraw : false
    }

    sideDrawerCloseHandler=()=>{
        this.setState({
            showSideDraw :false
        });
    }

    sideDrawerOpenHandler=()=>{
        this.setState({
            showSideDraw :true
        });
    }

    render(){
        return(
            <Aux>
                <Toolbar openSide={()=>this.sideDrawerOpenHandler()}/>
                <SideDrawer close={()=>this.sideDrawerCloseHandler()} isShow={this.state.showSideDraw}/>
                <main className="Content">
                    {this.props.children}
                </main>
             </Aux>
        )
    }
}

export default Layout;