import { IMAGE_URL } from "../utils/constants";

export const RestaurantCard = ({resData}) => {
    // Add error handling
    if (!resData) {
        return <div>Loading...</div>;
    }
    
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = resData?.info;
    

    return(
        <div className="res-card p-8 hover:p-10 w-[400px] min-h-[500px] rounded flex flex-col justify-between group transition-all ease-in-out duration-300" data-testid="res-card">
            <div className="flex h-[150px] justify-center mb-4"><img className="res-logo object-cover w-full rounded" src={IMAGE_URL + cloudinaryImageId} /></div>
            <div className="flex-1 transition-all ease-in-out duration-300">
                <h3 className="text-[24px] font-medium">{name}</h3>
                <h4 className="text-[16px] w-[300px]">{cuisines.join(", ")}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo} FOR TWO</h4>
                <h4>{sla.deliveryTime} minutes</h4>
            </div>
        </div>
    )
}

//Higher order component => its a normal js function

//input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return( 
            <div className="">
                <label className="absolute m-2 p-2 bg-green-700 text-white rounded" htmlFor="myinput">
                    Open
                    </label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
}; 