
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
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
             <h4>{cuisines.join(", ")}</h4> 
            <h5>{avgRating} stars</h5>
            <h5>{deliveryTime} minutes</h5>
            <h5>{costForTwo}</h5> 
             </div>
    )
}

export default RestaurentCard;