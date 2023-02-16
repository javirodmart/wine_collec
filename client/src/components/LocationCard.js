import { useState } from "react"
import { Card, Button } from "react-bootstrap"
import { Link, Route, Switch, useHistory } from "react-router-dom"
import WineInfo from "./WineInfo"

const BrandCard = ({user, id,  deleteLocation ,country, description, region, data,image }) => {
    const [BrandData, setBrandData] = useState([])
    


    const handleDelete = () => {
        fetch(`locations/${id}`, {
            method: "DELETE"
        })
        deleteLocation(id)
    }
    const history = useHistory()
    return (
        <div className="brand-card" style={{ width: '20rem' }}>
            <Card.Body >
                <Card.Title id="true">{region}</Card.Title>
                <img className="img" variant="top" src={image} />
                <Card.Text>
                    {country}
                </Card.Text>
                {user.admin ? <Button onClick={handleDelete} >Delete</Button> : null }
               <Link to={`/location-info/${id}`}> <Button> More Info</Button></Link>
            </Card.Body>
        </div>
    )
}

export default BrandCard