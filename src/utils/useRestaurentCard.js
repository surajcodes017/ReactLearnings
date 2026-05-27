import {useState , useEffect} from "react";


const useRestaurentCard = () =>{
    const [listofRestaurents,setListofRestaurent] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    
     useEffect(() =>{
        fetchData();
    },[]) 

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

 return {
        listofRestaurents,
        filteredRestaurants,
        setFilteredRestaurants,
    }

}

export default useRestaurentCard;