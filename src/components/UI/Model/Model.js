import React from 'react';
import './Model.css';
import Aux from '../../../hoc/Aux';
import Backdrop from "../Backdrop/Backdrop";


const model = (props) => {
        return(
            <Aux>
                <Backdrop clicked={props.modalClosed} show={props.isPurchasing} />
                <div style={{
                    transform:props.isPurchasing ? 'translateX(0)': 'translateX(-100vh)',
                    opacity: props.isPurchasing ? '1': '0'
                }} className="Modal">
                    {props.children}
                </div>
            </Aux>

        );

}

export default model;