import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../utils/cartSlice";
import { useEffect } from "react";


export const AddButton = ({item}) =>{
    const cartItems = useSelector((store)=>(store.cart.items))
    const dispatch = useDispatch();
    
    const handleAddItem = () => {
        //dispatch an action
        dispatch(addItem(item));
    }

    useEffect(()=>{
        console.log("Cart Items Updated: ", cartItems);
    },[])

    return(
        <div className="group px-[24px] py-[12px] border-2 border-green-500 bg-white rounded hover:bg-slate-400 transition-all ease-in-out duration-300 cursor-pointer"  onClick={()=> {
            handleAddItem(item);
            console.log(item);
            console.log(cartItems)}} >
            <h1 className="text-green-500 hover:text-white font-medium tracking-tighter group-hover:text-white transition-all ease-in-out duration-300 cursor-pointer">Add</h1>
        </div>
    )
}

