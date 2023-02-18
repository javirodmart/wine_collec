const Home = ({ user }) => {
    return (
        <>
            <div className="user-header" >
                <h1  >{user.first_name} {user.last_name} </h1>
                <img className="user-img" src={user.img_url} />
            </div>

        </>
    )
}
export default Home