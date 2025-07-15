import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import useOnlineStatus from '../utils/useOnlineStatus';
import { RestaurantCateogory } from './RestaurantCateogory';


const RestaurantMenu = () => {
    
    const Online = useOnlineStatus();

    const {resId} = useParams(); //gets the resId from the url and puts in useRestaurant custom hook
    
    const resInfo = useRestaurantMenu(resId); // takes the resId and return the resinfo by fetching the data
    
    if(resInfo === null) return <Shimmer/>;

    const ResCategory = resInfo ? resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards : [];

    const ResCategoryArray = ResCategory.filter((c) => 
      c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    
    const {name,cuisines, costForTwoMessage} = resInfo ? resInfo?.cards[2]?.card?.card?.info : {};
    

    if(!Online) return <h1>Please Check Your Internet</h1>;
  return ( 
    <RestaurantCateogory cateogorydata={ResCategoryArray}/>

  )
}


export default RestaurantMenu;
