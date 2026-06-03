
import {CDN_URL} from "../utils/constants"

const RestaurentCard = ({resData}) =>{
    // console.log(props)
    const {name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId,
        sla: {deliveryTime}
    } = resData.info
    return (
        // <div className="res-card m-4 p-4 w-[250px]">
        //     <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
        //     <h3>{name}</h3>
        //      <h4>{cuisines.join(", ")}</h4> 
        //     <h5>{avgRating} stars</h5>
        //     <h5>{deliveryTime} minutes</h5>
        //     <h5>{costForTwo}</h5> 
        //      </div>
        <div className="m-4 p-4 w-[250px] rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">

    <img
        className="w-full h-[170px] object-cover rounded-xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
    />

    <div className="mt-3">
        <h3 className="font-bold text-lg text-gray-800 truncate">
            {name}
        </h3>

        <h4 className="text-sm text-gray-600 mt-1 line-clamp-2">
            {cuisines.join(", ")}
        </h4>

        <div className="flex justify-between items-center mt-3">
            <h5 className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm font-semibold">
                ⭐ {avgRating}
            </h5>

            <h5 className="text-sm text-gray-700 font-medium">
                {deliveryTime} mins
            </h5>
        </div>

        <h5 className="mt-2 text-gray-800 font-semibold">
            {costForTwo}
        </h5>
    </div>
</div>
    )
}


 export const withPromotedLabel = (RestaurentCard) => {
    return (props) => {
        return (
            <div className="relative">
                <label
                    className="
                    absolute 
                    top-3 
                    left-3 
                    bg-gradient-to-r 
                    from-pink-500 
                    to-red-500 
                    text-white 
                    px-4 
                    py-1 
                    rounded-lg 
                    text-sm 
                    font-bold 
                    shadow-lg 
                    z-10
                    tracking-wide
                    "
                >
                    🔥 PROMOTED
                </label>
                <RestaurentCard {...props} />
            </div>
        );
    };
};
export default RestaurentCard;