import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Model from "../../components/UI/Model/Model";
import OrderSummary from "../../components/Burger/OrderSummary/Ordersummary";

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat :0
        },
        price : 2,
        purchasing :false
    }

    // updatePurchaseState () {
    //     const ingredients = {
    //         ...this.state.ingredients
    //     };
    //     const sum = Object 

    // }
    acceptOrder = () => {
        alert("Purchasing...");
    }

    // cancelOrder = () => {
    //     console.log("cancel");
    // }

    purchasingHandler = () => {
        this.setState({
            purchasing:true
        });
    }
    modalClosed = () =>{
        this.setState({
            purchasing:false
        });
    }

    addIngredientHandler = (type) => {
        const newIn = this.state.ingredients[type]+1;
        const newSt = {
            ...this.state.ingredients
        };
        newSt[type] = newIn;
        const oldPrice = this.state.price;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];
        // console.log(newPrice.toFixed(2));
        this.setState({
            ingredients : newSt,
            price : newPrice
        });

        // console.log(this.state.ingredients[type]);
    } 

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type]!==0){
            const newIn = this.state.ingredients[type]-1;
            const newSt = {
                ...this.state.ingredients
            };
            newSt[type] = newIn;
            const oldPrice = this.state.price;
            let newPrice = oldPrice - INGREDIENT_PRICES[type];
            if(newPrice<=0) newPrice =0 ;
            // console.log(newPrice.toFixed(2));
            this.setState({
                ingredients : newSt,
                price : newPrice
            });
        }
    

    }


    render(){
        return (
            <Aux>
                <Model  modalClosed={this.modalClosed} isPurchasing = {this.state.purchasing}><OrderSummary totalPrice={this.state.price} accept={() => this.acceptOrder()} cancel={()=>this.modalClosed()} ingredients={this.state.ingredients}/></Model>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls purchasing={this.purchasingHandler} price={this.state.price} removeIngredientHandler={this.removeIngredientHandler} addIngredientHandler = {this.addIngredientHandler} />
            </Aux>
        );
    };




}

export default BurgerBuilder; 