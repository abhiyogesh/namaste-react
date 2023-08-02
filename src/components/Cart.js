import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/Store/cartSlice";
import {useDispatch} from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length ===0 && <h1>Cart is Empty. Add Items to your cart.</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
