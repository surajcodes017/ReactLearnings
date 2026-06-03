import { useEffect,useState } from "react";
import {menuData} from "./mockData"


const useRestaurentMenu = () =>{
    
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    // const fetchData = async () =>{
        
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4873694&lng=78.3934657&restaurantId=340186&catalog_qa=undefined&submitAction=ENTER");
    //     console.log(data);
    //     console.log(data.status);
    //     console.log(data.headers.get("content-type"));

    //     const text = await data.text();
    //     console.log(text);
    //     // const json = await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    // }
//     const fetchData = async () => {
//   const resposne = await fetch(
//     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4873694&lng=78.3934657&restaurantId=340186&submitAction=ENTER"
//   );
//   const text = await resposne.text();

// //   console.log("Status:", data.status);
// //   console.log("Content-Type:", data.headers.get("content-type"));

// //   const text = await data.text();

//   console.log(text);
// };

    const fetchData = async() =>{
        const data = menuData.data;
        // console.log(data);
        setResInfo(data);
    }

    return resInfo;
}

export default useRestaurentMenu;