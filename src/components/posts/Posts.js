import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


import {LOAD_POSTS} from "../../redux/actions/actions";
import {postsService} from "../../services";
import {Post} from "../post/Post";

const Posts = () => {

    const {posts} = useSelector(state => state.postsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        postsService.getAll().then(({data}) => dispatch({type: LOAD_POSTS, payload: data}))
    }, []);

    return (
        <div>
            {posts.map(post => <Post kay={post.id} post={post}/>)}
        </div>
    )
}

export {Posts};