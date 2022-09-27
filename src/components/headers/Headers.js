import {Link} from "react-router-dom";

const Headers = () => {
    return (
        <div>
            <h3>Menu</h3>
            <div><Link to={'albums'}>ALBUMS</Link></div>
            <div><Link to={'comments'}>COMMENTS</Link></div>
            <div><Link to={'todos'}>TODOS</Link></div>
        </div>
    )
}
export {Headers};