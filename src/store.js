import { createStore } from "redux";
function cartReducer(state= { items: {}}, action) {
    switch(action.type){
        case "ADD_TO_CART":
            const newCart = { ...state.items };
            if (!newCart[action.product.id]) {
                newCart[action.product.id] = {
                    ...action.product,
                    quantity: 0
                };
            }
            newCart[action.product.id].quantity += 1;
            return { items: newCart };
        case "REMOVE_FROM_CART":
            const newCart1 = { ...state.items };
            if (!newCart1[action.product.id]) return;
            newCart1[action.product.id].quantity -= 1;
            if (newCart1[action.product.id].quantity <= 0) {
                delete newCart1[action.product.id];
            }
            return { items: newCart1 };
        default:
            return state;
    }
  
}


const store = createStore(cartReducer);

export default store;
