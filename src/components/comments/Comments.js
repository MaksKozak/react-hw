import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


import {Comment} from "../comment/Comment";
import {LOAD_COMMENTS} from "../../redux/actions/actions";
import {commentsService} from "../../services";

const Comments = () => {

    const {comments} = useSelector(state => state.commentsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        commentsService.getAll().then(({data}) => dispatch({type: LOAD_COMMENTS, payload: data}))
    }, []);

    return (
        <div>
            {comments.map(comment => <Comment kay={comment.id} comment={comment}/>)}
        </div>
    )
}

export {Comments};