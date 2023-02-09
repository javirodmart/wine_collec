import { useEffect, useState } from "react"
import WineCard from "./WineCard"
import WineInfo from "./WineInfo"


const MyWines = ({ wine, deleteWine }) => {

    const [wines, setWines] = useState([])

    useEffect(() => {
        fetch("/wines")
            .then((r) => r.json())
            .then((data) => setWines(data));
    }, []);
    const wineArray =
        wines.map((wines) => {
            return <WineCard key={wines.id} deleteWine={deleteWine}
                id={wines.id}
                name={wines.name}
                vintage={wines.vintage}
                image={wines.img_url}
                data={wines}
            />
        })

    function deleteWine(deleteWine) {
        const updatedArray = wines.filter((wine) => {
            return wine.id !== deleteWine
        })
        setWines(updatedArray)
    }
    return (
        <>
            <div className="blog">
                <h1>My Wines</h1>
                {wineArray}
            </div>
        </>
    )
}
export default MyWines