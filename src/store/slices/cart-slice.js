import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItem : []
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart(state,action){
            console.log(state,action);
            state.cartItem.push(action.payload);
        },

        removeFromCart(state,action){
            let cpyCartItem = [...state.cartItem];
            cpyCartItem = cpyCartItem.filter(item => item.id !== action.payload);

            state.cartItem = cpyCartItem;
            return state;
        }
    }

})

export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer