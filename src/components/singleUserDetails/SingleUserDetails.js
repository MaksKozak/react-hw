const SingleUserDetails = ({user}) => {

    return (
        <div>

                <div>ID --- {user.id}</div>
                <div>NAME --- {user.name}</div>
                <div>USERNAME --- {user.username}</div>
                <div>EMAIL --- {user.email}</div>
                <div>PHONE --- {user.phone}</div>
                <div>WEBSITE --- {user.website}</div>



        </div>
    )
};
export {SingleUserDetails};