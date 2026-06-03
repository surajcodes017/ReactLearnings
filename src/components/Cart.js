import ItemList from "./ItemList";
import { useSelector,useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";


const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart =() =>{
        dispatch(clearCart());
    }




   return (
  <div className="min-h-screen bg-gray-100 py-8">
    <div className="max-w-4xl mx-auto px-4">
      
      {/* Cart Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          🛒 Your Cart
        </h1>

        {cartItems.length > 0 && (
          <button
            onClick={handleClearCart}
            className="
              bg-red-500
              hover:bg-red-600
              text-white
              px-5
              py-2
              rounded-lg
              font-semibold
              shadow-md
              transition-all
            "
          >
            Clear Cart
          </button>
        )}
      </div>

      {/* Cart Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-7xl mb-4">🛍️</div>

            <h2 className="text-2xl font-bold text-gray-700">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some delicious food to get started.
            </p>
          </div>
        ) : (
          <>
            <ItemList items={cartItems} />

            {/* Cart Summary */}
            <div className="mt-8 border-t pt-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700">
                  Total Items
                </span>

                <span className="text-xl font-bold text-green-600">
                  {cartItems.length}
                </span>
              </div>

              <button
                className="
                  w-full
                  mt-6
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  py-4
                  rounded-xl
                  font-bold
                  text-lg
                  shadow-md
                  transition-all
                "
              >
                Proceed to Checkout →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
);
}
export default Cart;