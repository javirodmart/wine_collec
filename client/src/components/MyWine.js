import { useState } from "react"
import { Card, Button } from "react-bootstrap"
import { Link, Route, Switch, useHistory } from "react-router-dom"
import ReactStars from 'react-stars'
import { render } from 'react-dom'


const MyWine = ({ id, name, image, vintage, deleteWine, user }) => {
    const [isVintage, setIsVintage] = useState(vintage)
    const [wineData, setWineData] = useState([])
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    if (isVintage === 0) {
        setIsVintage("Not Vintage")
    }
   
    

    const handleDelete = () => {
        fetch(`my_wines/${id}`, {
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
                
                <Button onClick={handleDelete} > <i class="fa fa-trash-o"></i> </Button> 

                <Link to={`/wine-info/${id}`}> <Button > <i class="fa fa-info-circle" style={{fontsize: + "36px"}}></i> </Button></Link>
                {/* <WineInfo className="hide-wine-card" wineData={wineData} /> */}
            </Card.Body>
        </div>
    )
}

export default MyWine