import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
// import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error";
import Cart from "./components/Cart"
import RestaurentMenu from "./components/RestaurentMenu"
import {useState,useEffect} from "react";
import userContext from "./utils/userContext";
import { Provider } from "react-redux"
import appStore from "./utils/appStore";


const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(() => import("./components/About"))





const AppLayout = () => {

    const [userName,setUserName] = useState();
    useEffect(() =>{
        const data= {
            name: "Duppally suraj",
        }
        setUserName(data.name);
    },[])

        return (
            <Provider store={appStore}>
                <userContext.Provider value={
                {
                    loggedInUser:userName,
                    setUserName,
                }
            }>     
             <div className="app">
                <Header></Header>
                <Outlet />
            </div>
            </userContext.Provider>
            </Provider>
            
           
        )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/About",
                element: <Suspense>
                    <About fallback={<h1>Loading.....</h1>}/>
                </Suspense>
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path:"/Grocery",
                element: <Suspense fallback={<h1>Loading.....</h1>}>
                    <Grocery />
                </Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/Restaurents/:resId",
                element: <RestaurentMenu />
            }
        ],
        errorElement: <Error />
    }
    
    
])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

 