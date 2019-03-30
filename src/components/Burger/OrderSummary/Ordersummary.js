import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from "../../UI/Button/Button";


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(Igkey => {
            return (<li key={"fdsajfhj"+Igkey}><span style={{textTransform:"capitalize"}}>{Igkey}</span> : {props.ingredients[Igkey]}</li>)
        } );
    return(
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger would be look like:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.totalPrice.toFixed(2)} $</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.cancel} type="Danger">CANCER</Button>
            <Button clicked={props.accept} type="Success">ACCEPT</Button>
        </Aux>
    );
};


export default orderSummary;