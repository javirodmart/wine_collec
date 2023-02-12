import { useState } from "react"
import { Card, Button } from "react-bootstrap"
import { Link, Route, Switch, useHistory } from "react-router-dom"
import WineInfo from "./WineInfo"

const BrandCard = ({ id, name, image, est, deleteBrand }) => {
    const [BrandData, setBrandData] = useState([])
    


    const handleDelete = () => {
        fetch(`brands/${id}`, {
            method: "DELETE"
        })
        deleteBrand(id)
    }
    const history = useHistory()
    return (
        <div className="brand-card" style={{ width: '20rem' }}>
            <Card.Body >
                <Card.Title id="true">{name}</Card.Title>
                <img className="img" variant="top" src={image} />
                <Card.Text>
                    {est}
                </Card.Text>
                <Button onClick={handleDelete} >Delete</Button>
               <Link to={`/brand-info/${id}`}> <Button> More Info</Button></Link>
            </Card.Body>
        </div>
    )
}

export default BrandCard