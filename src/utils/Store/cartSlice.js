import {createSlice} from "@reduxjs/toolkit"

//config for creating a slice in our redux store which is appStore
const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : [] //dummy initial value to show the cart items
    },
    reducers :{
        //this is a reducer function which is map to action
        addItem :(state, action)=>{
            //mutating(modifying) the state here
            // Vanilla(older) Redux => Don't MUTATE STATE, returning was mandatory - Phele state modify nahi karte the.
            //phele aise karte the
            //const newState = [...state];
            //newState.items.push(action.payload)
            //return newState;
            //Redux  behind the scenes use the
            // immer library for finding the difference
            // between original state & mutate state and 
            //gives the new state which is immutable state.
            //https://immerjs.github.io/immer/

            //In the latest redux we do like this. Redux toolkits
            //We have to mutate the state
            //Redux Toolkit uses immer behind the scenes
            state.items.push(action.payload);
        },
        //this is a reducer function
        removeItem: (state) =>{ // we take action on the basis of requirement
         state.items.pop();
        },
        //this is a reducer function
        clearCart :(state) =>{
            state.items.length =0; // []
        }
    }
});

//actions are adding item , removing item , clear cart which is map to reducer functions

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;