import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import './Burger.css';

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
            .map(igKey => {
                return (
                    [...Array(props.ingredients[igKey])].map((_,i) =>{
                        return <BurgerIngredient key={igKey + i} type= {igKey} />
                    })
                );
            });


    if(!transformedIngredients.reduce((arr,el)=>{
        return arr.concat(el)
    },[])[0]){
        transformedIngredients = <div key={"123456asdf"}>Please! Feed me! :)</div>
    };



    // console.log(transformedIngredients);
    return(
        <div className="Burger">
            <BurgerIngredient type={"breadtop"}/>
            {[transformedIngredients]}
            <BurgerIngredient type={"breadbottom"}/>
        </div>
    );

}

export default Burger;