import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";



const Cart = () => {

    const cartItems = useSelector((store) => (store.cart.items))
    const dispatch = useDispatch();

    const removeCartItems = () =>{
        //dispatch an action to clear the cart
        dispatch(clearCart());
    };

    if(cartItems.length === 0){ return (
    <div className="flex mx-auto h-[50vh] justify-center items-center text-[24px] tracking-tighter">
        <h1>Your Card is Empty as Hell</h1>
    </div>
    )}

    return (
        <div className="flex flex-col gap-[24px] w-[800px] mx-auto">
            <div className="clear-cart flex p-4 justify-between">
                <h1 className="text-[16px] tracking-tighter">Cart</h1>
                <button onClick={removeCartItems} className="text-[16px] tracking-tighter">Clear Cart</button>
            </div>
            <ul>
                {cartItems.map((item,index)=>(
                            <li key={index}>
                                <div className='w-full flex justify-between p-4 border-b rounded'>
                                    <div className="flex-1 mr-4 min-w-0">
                                    <h1 className='text-[24px] text-slate-600 font-medium tracking-tighter mb-2'>{item.card.info.name}</h1>
                                    <h1 className="mb-1">Rs{item.card.info.price/100 || item.card.info.defaultPrice/100}</h1>
                                    <h1 className="mb-1">{item.card.info.ratings?.aggregatedRating?.rating}</h1>
                                    <h1 className="text-[16px] text-slate-600 font-light">{item.card.info.description}</h1>
                                    </div>
                                    <div className="relative inline-block">
                                    <img className="w-[150px] h-[150px] rounded object-cover flex-shrink-0" src={IMAGE_URL + item.card.info.imageId} />

                                    </div>
                        
                                </div>
                            </li>
                        ))}
                </ul>
        </div>
    )
}

export default Cart;