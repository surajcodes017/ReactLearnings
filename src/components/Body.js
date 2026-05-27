import { resList } from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer"
import {useState} from "react"
import useRestaurentCard from "../utils/useRestaurentCard";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {

    const [searchText,setsearchText] = useState("");
   
     const {
        listofRestaurents,
        filteredRestaurants,
        setFilteredRestaurants,
    } = useRestaurentCard();

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks like you're offline!!🤔 Please check your internet connection</h1>    
    

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
                     setFilteredRestaurants(filteredList);
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