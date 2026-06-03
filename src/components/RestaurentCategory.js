import ItemList from "./ItemList"
import {useState} from "react";

const RestaurentCategory = ({data,showItems,setShowIndex}) =>{
    // const [showItems,setShowItems] = useState(false);
    const handleClick = () =>{
        // showItems?setShowItems(false):setShowItems(true);
        setShowIndex();
        
    }
    // console.log(data)
    return (
        <div>
            {/* Accordion Header */}
            <div className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4" >
                <div className="flex justify-between cursor-pointer" onClick={handleClick} >
                <span className="font-bold text-xl">{data.title} ({data.itemCards.length})</span>
                <span>{"🔽"}</span>
                </div>

                {showItems &&  <ItemList items={data.itemCards} />}
            </div>
            {/* Accordion Body */}
        </div>
    )
}

export default RestaurentCategory;