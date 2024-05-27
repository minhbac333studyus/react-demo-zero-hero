import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import About from "./component/About";
import Contact from "./component/Contact";
import Body from "./component/Body";

const ROUTES = createBrowserRouter([
    {
        path:"/",
        element : <App/>,
        children :[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element: <About/>

            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ]
    },

])


export default ROUTES;