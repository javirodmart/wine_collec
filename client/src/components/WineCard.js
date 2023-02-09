import { useState } from "react"
import { Card, Button } from "react-bootstrap"
import { Link, Route, Switch, useHistory } from "react-router-dom"
import WineInfo from "./WineInfo"

const WineCard = ({ id, name, image, vintage, deleteWine, data }) => {
    const [isVintage, setIsVintage] = useState(vintage)
    const [wineData, setWineData] = useState([])
    if (isVintage === 0) {
        setIsVintage("Not Vintage")
    }


    const handleDelete = () => {
        fetch(`wines/${id}`, {
            method: "DELETE"
        })
        deleteWine(id)
    }
    const history = useHistory()
    function handleClick(){
        
 
    }
    return (
        <Card className="card" style={{ width: '20rem' }}>
            <Card.Body >
                <Card.Title id="true">{name}</Card.Title>
                <img className="img" variant="top" src={image} />
                <Card.Text>
                    {isVintage}
                </Card.Text>
                <Button onClick={handleDelete} >Delete</Button>
               <Link to={`/wine-info/${id}`}> <Button onClick={handleClick}> More Info</Button></Link>
                    {/* <WineInfo className="hide-wine-card" wineData={wineData} /> */}
            </Card.Body>
        </Card>
    )
}

export default WineCard