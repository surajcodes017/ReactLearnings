import { useEffect,useState } from "react";
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";

const RestaurentMenu = () =>{

    // const {resId} = useParams();
    // const resInfo = useRestaurentMenu(resId);
    const resInfo = useRestaurentMenu();
    const [showIndex,setShowIndex] = useState(null);
    // console.log(resInfo)


    if(resInfo===null) return <Shimmer />;
    const restaurantInfo=resInfo?.cards[2]?.card?.card?.info;
    const { name, cuisines, costForTwoMessage, avgRating } = restaurantInfo;
    const {itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(itemCards);
    const categories = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c =>
        c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories);
    const handleAccordion = (index) =>{
        if(showIndex === index) setShowIndex(null);
        else setShowIndex(index);
    } 


    return (
        <div className="text-center">
           <h1 className="font-bold text-2xl">{name}</h1>

        <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* Categories Accordion */}
            {categories.map((category,index)=>{
                return <RestaurentCategory 
                key={category.card.card.title}
                data={category?.card?.card} 
                showItems ={showIndex === index?true:false}
                setShowIndex={() => handleAccordion(index) }
                
                 />
            })}
        </div>
    )
}

export default RestaurentMenu;