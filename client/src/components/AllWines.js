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
        wines.map((wines) => {
            return(
                <>
                <WineCard key={wines.id} deleteWine={deleteWine}
                id={wines.id}
                name={wines.name}
                vintage={wines.vintage}
                image={wines.img_url}
                data={wines}
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
        <Link to="/add_wine"><Button>Add a Wine</Button></Link>
            <div className="cards">
                <h1>All Wines</h1>
                {wineArray}
            </div>
        </>
    )
}
export default AllWines