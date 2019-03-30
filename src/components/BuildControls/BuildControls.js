import React from 'react';
import "./BuildControls.css";
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label : "Salad", type: 'salad'},
    {label : "Meat", type: 'meat'},
    {label : "Bacon", type: 'bacon'},
    {label : "Cheese", type: 'cheese'}
];

const buildControls = (props) => {
    const transformBuildControls = controls.map((a,i) =>{
        return <BuildControl 
        remove ={()=> props.removeIngredientHandler(controls[i].type)} 
        add = {() => props.addIngredientHandler(controls[i].type)} 
        key={i+"fdsaf"} 
        label = {controls[i].label}/>
    });
    return(
        <div className="BuildControls">
            <div><strong> Price: {props.price.toFixed(2)} </strong></div>
            {transformBuildControls}
            <button onClick={() => props.purchasing() } disabled={props.purchaseable} className="OrderButton">ORDER NOW</button>
        </div>
    );


}



export default buildControls;