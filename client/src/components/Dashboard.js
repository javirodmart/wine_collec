import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MyWine from "./MyWine"

const Dashboard = (user) => {
    const { id } = useParams()
    const [myWine, setMyWine] = useState([])
    useEffect(() => {
        fetch(`/dashboard/users/${id}/wines`)
            .then(r => r.json())
            .then(data => (console.log(data), setMyWine(data)))

    }, [])
    

    const wineArray = myWine.map((wine) => {
        
        return <MyWine user={user} key={wine.id}
            id={wine.id}
            name={wine.name}
            vintage={wine.vintage}
            image={wine.img_url}
            data={wine} />
    })

    return (
        <>
            <div className="dashboard">
                <h1> {user.user.first_name}`s Wine Cellar</h1>
                {wineArray}
                <h1></h1>
            </div>

        </>
    )

}
export default Dashboard