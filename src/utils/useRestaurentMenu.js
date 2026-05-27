import { useEffect,useState } from "react";

const useRestaurentMenu = () =>{
    
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4873694&lng=78.3934657&restaurantId=11114&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurentMenu;