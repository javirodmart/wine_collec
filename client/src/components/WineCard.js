import { useState } from "react"
import { Card, Button } from "react-bootstrap"
import { Link, Route, Switch, useHistory } from "react-router-dom"
import { FaBeer } from 'react-icons/fa';

import ReactStars from 'react-stars'
import { render } from 'react-dom'


const WineCard = ({ id, name, vintage, image, blend, flavor_profile, description, location_id, brand_id, deleteWine, userId, user, handleNewWine }) => {
    const [isVintage, setIsVintage] = useState(vintage)
    const [wineData, setWineData] = useState([])
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [formData, setFormData] = useState({
        name: name,
        vintage: vintage,
        blend: blend,
        flavor_profile: flavor_profile,
        description: description,
        img_url: image,
        brand_id: brand_id,
        location_id: location_id,
        user_id: userId
    })

    if (isVintage === 0) {
        setIsVintage("Not Vintage")
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const NewWine = formData
        fetch(`/my_wines`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then((data) => (handleNewWine(data)))
                } else {
                }
            })
    }

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

                {user.admin ? <Button onClick={handleDelete} ><i class="fa fa-trash-o"></i></Button> : null}

                <Link to={`/wine-info/${id}`}> <Button><i class="fa fa-info-circle" style={{fontsize: + "36px"}}></i></Button></Link>
                <Link /* to={`/dashboard/${user.id}/`}*/ > <Button onClick={handleAdd} > <i class="fa fa-plus" style={{fontsize: + "36px"}}></i> </Button></Link>
                {/* <WineInfo className="hide-wine-card" wineData={wineData} /> */}
            </Card.Body>
        </div>
    )
}

export default WineCard