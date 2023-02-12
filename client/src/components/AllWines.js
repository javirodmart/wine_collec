import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link, Route,useParams } from "react-router-dom"
import WineCard from "./WineCard"
import WineInfo from "./WineInfo"


const AllWines = ({ user, deleteWine }) => {
    const { id } = useParams()
    const [wines, setWines] = useState([])

    useEffect(() => {
        fetch(`/wines`)
            .then((r) => r.json())
            .then((data) =>setWines(data));
    }, []);
    const wineArray =
        wines.map((wine) => {
            return(
                <>
                <WineCard key={wine.id} deleteWine={deleteWine}
                id={wine.id}
                name={wine.name}
                vintage={wine.vintage}
                image={wine.img_url}
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
    console.log(wines)
    return (
        <>
        <Link to="/add_wine"><Button>Add a Wine</Button></Link>
            <div className="cards">
                <h1>All Wines</h1>
                {wineArray}
            </div>
        </>
    )
}
export default AllWines