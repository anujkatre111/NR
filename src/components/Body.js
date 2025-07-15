import { useState, useEffect, useContext } from "react"
import { RestaurantCard ,withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";



export const Body = () => {
    const [restList,setRestList] = useState([]);

    const [searchText, setSearchText] = useState("");

    const [newList,setNewList] = useState([]);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const {setUserName,loggedInUser} = useContext(UserContext);

    useEffect(()=>{
        fetchData();
    },[]);

    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();
        

        setRestList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setNewList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
         
    }
    
      return restList.length === 0 ? <Shimmer/> : (
        <div className="flex flex-col gap-[64px] body">

            <div className="filter py-[24px] flex gap-[200px] justify-center">

                <div className="search-btn">
                    <input type="text" className="p-2 border border-slate-500 bg-slate-200 rounded-[6px]" placeholder="Search for restaurants" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-btn p-2 bg-slate-200 rounded hover:bg-[#f0f0f0]" onClick={()=>{
                        const filteredLi = restList.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
                    )
                    setNewList(filteredLi);
                    }}>Search</button>
                </div>

                <div className="username-btn">
                    <input type="text" className="p-2 border border-slate-500 bg-slate-200 rounded-[6px]" placeholder="Set Username"
                     value={loggedInUser}
                     onChange={(e)=> setUserName(e.target.value)} />
                </div>

                <button className="filter-btn p-2 px-8 bg-slate-200 border border-slate-400 rounded hover:bg-[#f0f0f0] tracking-tighter" onClick={() => {
                const filteredList = restList.filter(
                    (res) => res.info.avgRating > 4.3
                );
                setNewList(filteredList);
                }} >
                Top Rated Restaurants</button>
            </div>

            <div className="res-container mx-auto justify-around grid grid-flow-rows grid-cols-4 gap-4">
              {newList.map((restaurant) => (
                <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                    {/* if the restaurant card is promoted then show promoted label on top of it */}
                  {restaurant.info.isOpen ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant}/>}
                </Link>
              ))}
            </div>

        </div>
  )}