import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {UsersPage, SingleUserPage, PostsPage, CommentsPage} from "./pages"



function App() {

    return (

        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'users/:id'} element={<SingleUserPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;