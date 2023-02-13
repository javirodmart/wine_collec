import { useState } from "react"
import { Card, Button } from "react-bootstrap"
import { Link, Route, Switch, useHistory } from "react-router-dom"
import WineInfo from "./WineInfo"

const WineCard = ({ id, name, image, vintage, deleteWine,user }) => {
    const [isVintage, setIsVintage] = useState(vintage)
    const [wineData, setWineData] = useState([])
    if (isVintage === 0) {
        setIsVintage("Not Vintage")
    }
console.log(user.admin)

    const handleDelete = () => {
        fetch(`wines/${id}`, {
            method: "DELETE"
        })
        deleteWine(id)
    }
    const history = useHistory()
   
    return (
        <div className="wine-card" style={{ width: '20rem' }}>
            <Card.Body >
                <Card.Title id="true">{name}</Card.Title>
                <img className="img" variant="top" src={image} />
                <Card.Text>
                    {isVintage}
                </Card.Text>
                {user.admin ?<Button onClick={handleDelete} >Delete</Button> :null }
                
               <Link to={`/wine-info/${id}`}> <Button > More Info</Button></Link>
                    {/* <WineInfo className="hide-wine-card" wineData={wineData} /> */}
            </Card.Body>
        </div>
    )
}

export default WineCard