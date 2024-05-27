import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import About from "./component/About";
import Contact from "./component/Contact";

const ROUTES = createBrowserRouter([
    {
        path:"/",
        element : <App/>

    },
    {
        path:"/about",
        element: <About/>

    },
    {
        path:"/contact",
        element:<Contact/>
    }
])


export default ROUTES;