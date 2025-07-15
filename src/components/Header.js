import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { useContext, useState } from "react"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



export const Header = () =>{

    const [btnNameReact, setBtnNameReact] = useState(false);

    const {loggedInUser} = useContext(UserContext);

    //Subscibing to the store using selector
    const cartItems = useSelector((store)=> store.cart.items);
    
    return(
        <div className="header flex justify-between items-center p-12 bg-white z-10 transition-transform overflow-visible duration-300 border-b border-slate-700 sticky top-0 ">
            <div className="logo w-[64px] overflow-visible transition-transform duration-300">
                <img src="https://i.pinimg.com/736x/14/fd/b1/14fdb1127c5b833bf8018cf60e138579.jpg" className="w-full rounded-[48px] transform-gpu hover:scale-110 transition-transform duration-300"/>
            </div>
            <div className="nav-items tracking-tighter">
                <ul className="flex items-center gap-12">
                    <li className="hover:text-red-600">
                        <h1>{useOnlineStatus() ? "OK" : "NOT OK"}</h1>
                    </li>
                    <li className="hover:text-red-600">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-red-600">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="hover:text-red-600">
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="hover:text-red-600">
                    <Link to="/grocery">grocery</Link>
                    </li>
                    <li className="hover:text-red-600">
                        <Link to="/cart">
                            Cart -  ({cartItems.length} Items)
                        </Link>
                    </li>
                    <li>
                        <button className="min-w-[96px] border border-slate-700 bg-white px-[12px] py-[8px] rounded hover:bg-black hover:text-white transition-all ease-in-out duration-300" onClick={()=>{setBtnNameReact(!btnNameReact)}}>{btnNameReact ? `${loggedInUser}` : "Log In"}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}