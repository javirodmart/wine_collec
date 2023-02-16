import { useEffect, useState } from "react"
import { Card, Button } from "react-bootstrap"
import { Link, Redirect, useHistory , useParams} from "react-router-dom"


const AddBrand = ({ location, handelNewLocation, }) => {
    const history = useHistory()
    const [formData, setFormData] = useState({
        country: '',
        region: '',
        description: '',
        img_url:""
    })
    const [errors, setErrors] = useState([]);
    const [newLocation, setNewLocation] = useState([])
    const [hide,setHide] = useState("hide")
    const [id,setId] = useState([])


    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newLocation = formData
        console.log(formData)
        fetch("/locations", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newLocation),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then((data) => (setNewLocation(data),setHide("new-Brand-card"),handelNewLocation(data)))
                } else {
                    res.json().then((errorData) => setErrors(errorData.errors))
                }
            })
            setId(formData.id)
    }

    function handleHide(){
        setHide("new-Brand-card")
    }
console.log(newLocation)
    return (
        <>
            <h2>New Location</h2>
            <form onSubmit={handleSubmit}>
                <h5>Country:</h5>
                <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
                <br></br>
                <h5>Region:</h5>
                <input type="text" name="region" placeholder="Region" value={formData.region} onChange={handleChange} />
                <h5>Description:</h5>
                <input type="text" name="description" placeholder="description" value={formData.description} onChange={handleChange} />
                <br></br>
                <h5>Image:</h5>
                <input type="text" name="img_url" placeholder="Image Url" value={formData.img_url} onChange={handleChange} />
                <br></br>
                {/* <h5>Image:</h5>
                <input type="text" name="img_url" placeholder="image" value={formData.img_url} onChange={handleChange} /> */}
                <br></br>
                <br></br>
                {errors.length > 0 && (
                    <ul style={{ color: "red" }}>
                        {errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                )}
                <br></br>
                <button>Submit</button>
                {
                    <div className={hide}>
                    <Card  style={{ width: '20rem' }}>
                        <Card.Body >
                            <Card.Title>{newLocation.region}</Card.Title>
                            <img className="img" variant="top" src={newLocation.img_url} />
                            <Card.Text>
                                {newLocation.country}
                            </Card.Text>
                            <Link to={`/location-info/${newLocation.id}`}> <Button> More Info</Button></Link>
                        </Card.Body>
                    </Card>
                    </div>
                }
            </form>
        </>
    )
}
export default AddBrand