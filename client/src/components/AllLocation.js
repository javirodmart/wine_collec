import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link, Route, useParams } from "react-router-dom"
import LocationCard from "./LocationCard"
import WineInfo from "./WineInfo"


const AllLocations = ({ user, handelNewLocation}) => {
    const { id } = useParams()
    const [wines, setW] = useState([])
    const [location,setLocation] = useState([])
    
    useEffect(() => {
        fetch("/locations")
        .then((r) => r.json())
        .then((data) => setLocation(data));
      }, []);

      function deleteLocation(deleteLocation) {
        const updatedArray = location.filter((locations) => {
            return locations.id !== deleteLocation
        })
        setLocation(updatedArray)
    }
 
    const wineArray =
        location.map((locations) => {
            return (
                <>
                    <LocationCard key={locations.id} user={user} handelNewLocation={handelNewLocation} deleteLocation={deleteLocation}
                        id={locations.id}
                        country={locations.country}
                        description={locations.description}
                        region={locations.region}
                        image={locations.img_url}
                        data={locations}
                    />
                </>
            )
        })


    return (
        <>
             {user.admin ? <Link to="/add_location"><Button>Add a Region</Button></Link> :null }
            
            <div className="cards">
                <h1>All Regions</h1>
                {wineArray}
            </div>
        </>
    )
}
export default AllLocations