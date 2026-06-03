import { resList } from "../utils/mockData";
import RestaurentCard,{withPromotedLabel} from "./RestaurentCard";
import Shimmer from "./Shimmer"
import {useState,useContext} from "react"
import useRestaurentCard from "../utils/useRestaurentCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";



const Body = () => {
    

    const [searchText,setsearchText] = useState("");
   
     const {
        listofRestaurents,
        filteredRestaurants,
        setFilteredRestaurants,
    } = useRestaurentCard();
    const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);
    // console.log(listofRestaurents)
    
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks like you're offline!!🤔 Please check your internet connection</h1>    
    const {setUserName,loggedInUser} = useContext(userContext);

    return (listofRestaurents.length === 0)?(<Shimmer />): (
        // <div className="body">
        //     <div className="filter flex ">
        //         <div className="search m-4 p-4">
        //             <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
        //                     setsearchText(e.target.value)
        //             }} />
        //             <button    className="px-4 py-1 m-4 bg-green-300 rounded-lg"
        //             onClick={()=>{
                        
        //                 const filteredRestaurents = listofRestaurents.filter((res) =>{
        //                     return res.info.name.toLowerCase().includes(searchText.toLowerCase())
        //                 })
        //                 setFilteredRestaurants(filteredRestaurents)
        //             }} >search</button>
        //         </div>

        //             <div className="m-4 p-4 flex items-center">
                        
        //         <button className="filter-btn px-4 py-1 m-4 bg-gray-200 rounded-lg" 
        //         onClick={() =>{
        //             const filteredList = listofRestaurents.filter(
        //                  (res)=> res.info.avgRating > 4
        //             );
        //              setFilteredRestaurants(filteredList);
        //         }}
               
        //         >Top Rated Restaurents</button>

        //             </div>

        //     </div>
        //     <div className="flex flex-wrap bg-gray-100 min-h-screen">
        //     {
        //         filteredRestaurants.map((restaurent) =>{
        //             return (
        //                     <RestaurentCard 
        //                     key={restaurent.info.id}
        //                     resData={restaurent} />
        //             )
        //         })
        //     }
           
           
           
        //     </div>

        // </div>
        <div className="bg-gray-100 min-h-screen">

    {/* Filter Section */}
    <div className="flex flex-col md:flex-row justify-between items-center px-6 py-5 bg-white shadow-md rounded-xl mx-4 mt-4">

        {/* Search Section */}
        <div className="flex items-center gap-3">

            <input
                type="text"
                className="border border-gray-300 px-4 py-2 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
                placeholder="Search restaurants..."
                value={searchText}
                onChange={(e) => {
                    setsearchText(e.target.value);
                }}
            />

            <button
                className="px-5 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300 shadow-md"
                onClick={() => {

                    const filteredRestaurents =
                        listofRestaurents.filter((res) => {
                            return res.info.name
                                .toLowerCase()
                                .includes(searchText.toLowerCase());
                        });

                    setFilteredRestaurants(filteredRestaurents);

                }}
            >
                Search
            </button>

        </div>
        <div className="mt-4 md:mt-0">

            <label>User Name:</label>
            <input className="border border-2 m-2" value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)} />

        </div>

        {/* Filter Button */}
        <div className="mt-4 md:mt-0">

            <button
                className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 shadow-md"
                onClick={() => {

                    const filteredList =
                        listofRestaurents.filter(
                            (res) => res.info.avgRating > 4
                        );

                    setFilteredRestaurants(filteredList);

                }}
            >
                Top Rated Restaurants
            </button>

        </div>

    </div>

    {/* Restaurant Cards */}
    <div className="flex flex-wrap justify-center gap-6 px-4 py-8 ">

        {
            filteredRestaurants.map((restaurant) => (
                (restaurant.info.avgRating>4.0)?<RestaurentCardPromoted key={restaurant.info.id}
                    resData={restaurant} /> : <RestaurentCard
                    key={restaurant.info.id}
                    resData={restaurant}
                />
                
            ))
        }

    </div>

</div>
    )
}


export default Body;