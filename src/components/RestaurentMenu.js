import { useEffect,useState } from "react";
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () =>{

    const {resId} = useParams();
    const resInfo = useRestaurentMenu(resId);

    if(resInfo===null) return <Shimmer />;
    const restaurantInfo=resInfo?.cards[2]?.card?.card?.info;
    const { name, cuisines, costForTwoMessage, avgRating } = restaurantInfo;




    return (
        <div>
           <h1>{name}</h1>

        <h3>{cuisines.join(", ")}</h3>

        <h4>{avgRating} stars</h4>

        <h4>{costForTwoMessage}</h4>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestaurentMenu;