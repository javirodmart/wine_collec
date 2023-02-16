import { useState } from "react"
import { Card, Button } from "react-bootstrap"
import { Link, Route, Switch, useHistory } from "react-router-dom"


const BrandCard = ({ id,user ,name, image, est, deleteBrand }) => {
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
                {user.admin ? <Button onClick={handleDelete} > <i class="fa fa-trash-o"></i> </Button> : null }
               <Link to={`/brand-info/${id}`}> <Button> <i class="fa fa-info-circle" style={{fontsize: + "36px"}}></i> </Button></Link>
            </Card.Body>
        </div>
    )
}

export default BrandCard