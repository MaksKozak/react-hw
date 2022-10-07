import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {UsersPage, SingleUserPage} from "./pages"



function App() {

    return (

        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'users/:id'} element={<SingleUserPage/>}/>
                <Route path={'posts'} element={}/>
                <Route path={'comments'} element={}/>
            </Route>
        </Routes>
    );
}

export default App;