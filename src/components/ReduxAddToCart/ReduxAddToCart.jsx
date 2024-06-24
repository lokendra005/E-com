import { useSelector, useDispatch } from "react-redux";
function AddToCart({ product }) {
    console.log("add to cart", product.id);
    // useSelector
    let dispatch = useDispatch();
    function increase() {
        console.log("increase");
        //dispatch({type: , payload: })
        dispatch({ type: "ADD_TO_CART", payload: product });
    }
    function decrease() {
        console.log("decrease");
        dispatch({ type: "REMOVE_FROM_CART", payload: product });
     //dispatch({type: , payload: })
    }
    

    let state useSelector((state)=>{
        return state.cart;    
    })


    const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if (quantity === 0) {
        return (
            <div>
                
                <button onClick={increase}>AddToCart</button>
            </div>
     )  
    } else {
        return ( 
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
            </div>
        )
    }
}
export default AddToCart;