import {Headers} from "../components";

import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Headers/>
            <h3>Info</h3>
            <Outlet/>
        </div>
    )
}
export {MainLayout};