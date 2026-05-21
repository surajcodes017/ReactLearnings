import { resList } from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer"



const Body = () => {
    const [listofRestaurents,setListofRestaurent] = useState([]);
    const [searchText,setsearchText] = useState("");
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    // console.log("rerendering bhai")
    // console.log(listofRestaurents)
    useEffect(() =>{
        fetchData();
    },[]) 

    // const fetchData = async() =>{
    //     const data = await fetch(
    //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4873694&lng=78.3934657&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //     );
    //     const json=await data.json();

    //     setListofRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // }
    const fetchData = async () => {

    const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4873694&lng=78.3934657&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const restaurantsCard = json?.data?.cards?.find(
        (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants =
        restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListofRestaurent(restaurants);
    setFilteredRestaurants(restaurants);
};

    

    return (listofRestaurents.length === 0)?(<Shimmer />): (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                            setsearchText(e.target.value)
                    }} />
                    <button     onClick={()=>{
                        
                        const filteredRestaurents = listofRestaurents.filter((res) =>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setFilteredRestaurants(filteredRestaurents)
                    }}>search</button>
                </div>
                <button className="filter-btn" 
                onClick={() =>{
                    const filteredList = listofRestaurents.filter(
                         (res)=> res.info.avgRating > 4
                    );
                     setListofRestaurent(filteredList);
                }}
               
                >Top Rated Restaurents</button>
            </div>
            <div className="res-container">
            {
                filteredRestaurants.map((restaurent) =>{
                    return (
                            <RestaurentCard 
                            key={restaurent.info.id}
                            resData={restaurent} />
                    )
                })
            }
           
           
           
            </div>

        </div>
    )
}


export default Body;