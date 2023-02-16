import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link, Route, useParams } from "react-router-dom"
import WineCard from "./WineCard"
import WineInfo from "./WineInfo"


const AllWines = ({ user, deleteWine , handleNewWine}) => {
    const { id } = useParams()
    const [wines, setWines] = useState([])
    const [admin, setAdmin] = useState(true)



    useEffect(() => {
        fetch(`/wines`)
            .then((r) => r.json())
            .then((data) => setWines(data));
    }, []);


    const wineArray =
        wines.map((wine) => {
            return (
                <>
                    <WineCard key={wine.id} wine={wine} userId={user.id} user={user} deleteWine={deleteWine} handleNewWine={handleNewWine}
                        id={wine.id}
                        name={wine.name}
                        vintage={wine.vintage}
                        image={wine.img_url}
                        blend={wine.blend}
                        flavor_profile={wine.flavor_profile}
                        description={wine.description}
                        location_id={wine.location_id}
                        brand_id={wine.brand_id}
                        data={wine}
                    />
                </>
            )
        })






    function deleteWine(deleteWine) {
        const updatedArray = wines.filter((wine) => {
            return wine.id !== deleteWine
        })
        setWines(updatedArray)
    }

    return (
        <>
            {user.admin ? <Link to="/add_wine"><Button>Add Wine</Button></Link> : null}
            <div className="cards">
                <h1>All Wines</h1>
                {wineArray}
            </div>
        </>
    )
}
export default AllWines