import { useState } from "react";
import { IMAGE_URL } from "../utils/constants";
import { AddButton } from "./AddButton";



export const RestaurantCateogory = ({cateogorydata}) => {
    
    // const [openStates, setOpenStates] = useState({});
   
    const [showIndex,setShowIndex] = useState("");

    
    // console.log(showIndex);
    // Function to toggle the open state of a section
    // This function updates the openStates state to toggle the visibility of a section
    
    // const toggleSection = (sectionTitle) => {
    //     setOpenStates(prev => ({
    //         ...prev,
    //         [sectionTitle]: !prev[sectionTitle]
    //     }));
    // };
    return (
        
        <div className="m-auto w-[800px]">

        <ul>
            {cateogorydata.map((menus,index) => {
                const sectionTitle = menus.card.card.title;
                const isOpen = showIndex === sectionTitle;
                
                
                return (
                    <div className="max-h-fit" key={sectionTitle}>
                        <div className="flex justify-between p-4 border-b border-slate-300">
                            <h1 className="text-[24px] tracking-tighter">{sectionTitle}</h1>
                            <div className="relative overflow-visible">
                                <button className="absolute text-[16px] font-medium tracking-tighter" onClick={() => {
                                    // toggleSection(sectionTitle); 
                                    setShowIndex(isOpen ? "" : sectionTitle); // Toggle the showIndex state
                                }}>
                                    {isOpen ?  "+" : "-"}
                                    </button>
                            </div>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"  
                        }`}>
                        {menus.card.card.itemCards.map((item)=>(
                            <li key={item.card.info.id}>
                                <div className='w-full flex justify-between p-4 border-b rounded'>
                                    <div className="flex-1 mr-4 min-w-0">
                                    <h1 className='text-[24px] text-slate-600 font-medium tracking-tighter mb-2'>{item.card.info.name}</h1>
                                    <h1 className="mb-1">Rs{item.card.info.price/100 || item.card.info.defaultPrice/100}</h1>
                                    <h1 className="mb-1">{item.card.info.ratings?.aggregatedRating?.rating}</h1>
                                    <h1 className="text-[16px] text-slate-600 font-light">{item.card.info.description}</h1>
                                    </div>
                                    <div className="relative inline-block">
                                    <img className="w-[150px] h-[150px] rounded object-cover flex-shrink-0" src={IMAGE_URL + item.card.info.imageId} />
                                        <div className='absolute left-1/2 transform -translate-x-1/2' style={{top: '120px'}}>
                                            <AddButton item={item}/>
                                        </div>
                                    </div>
                        
                                </div>
                            </li>
                        ))}
                    </div>
                </div>
            );
        })}
        </ul>   

    
        </div>
    );
}