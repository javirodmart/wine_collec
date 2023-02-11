import { useEffect, useState } from "react"
import { Card, Button } from "react-bootstrap"
import { Link, Redirect, useHistory , useParams} from "react-router-dom"


const AddWine = ({ wine, brand, location, handelNewWine, }) => {
    const history = useHistory()
    const [formData, setFormData] = useState({
        name: '',
        vintage: 0,
        blend: "",
        flavor_profile: "",
        description: "",
        img_url: "",
        brand_id: 0,
        location_id: 0
    })
    const [errors, setErrors] = useState([]);
    const [newWine, setNewWine] = useState([])
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
        const NewWine = formData
        console.log(formData)
        fetch("/wines", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(NewWine),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then((data) => (handelNewWine(data), setNewWine(data),setHide("new-wine-card")))
                } else {
                    res.json().then((errorData) => setErrors(errorData.errors))
                }
            })
            setId(NewWine.id)
    }
console.log(id)
    
    function handleHide(){
        setHide("new-wine-card")
    }
    console.log(newWine.id)
    return (
        <>
            <h2>New Wine</h2>
            <form onSubmit={handleSubmit}>
                <h5>Name:</h5>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <br></br>
                <h5>Vintage:</h5>
                <input type="text" name="vintage" placeholder="Year" value={formData.vintage} onChange={handleChange} />
                <br></br>
                <h5>Blend:</h5>
                <input type="text" name="blend" placeholder="Blend/Notes" value={formData.blend} onChange={handleChange} />
                <br></br>
                <h5>Flavor Profile</h5>
                <input type="text" name="flavor_profile" placeholder="Flavor Profile" value={formData.flavor_profile} onChange={handleChange} />
                <br></br>
                <h5>Description</h5>
                <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
                <h5>Image Url</h5>
                <input type="text" name="img_url" placeholder="Image url" value={formData.img_url} onChange={handleChange} />
                <br></br>
                <label htmlFor="brand_id">Brand:</label>
                <select
                    id="brand_id"
                    value={formData.brand_id}
                    name="brand_id"
                    onChange={handleChange}
                >
                    <option value="">Select Brand...</option>
                    {brand.map((brands) => (
                        <option key={brands.id} value={brands.id}>
                            {brands.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="location_id">Location:</label>
                <select
                    id="location_id"
                    value={formData.location_id}
                    name="location_id"
                    onChange={handleChange}
                >
                    <option value="">Select Location...</option>
                    {location.map((locations) => (
                        <option key={locations.id} value={locations.id}>
                            {locations.state}
                        </option>
                    ))}
                </select>
                <br></br>
                {errors.length > 0 && (
                    <ul style={{ color: "red" }}>
                        {errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                )}
                <button>Submit</button>
                {
                    <div className={hide}>
                    <Card  style={{ width: '20rem' }}>
                        <Card.Body >
                            <Card.Title>{newWine.name}</Card.Title>
                            <img className="img" variant="top" src={newWine.img_url} />
                            <Card.Text>
                                {newWine.isVintage}
                            </Card.Text>
                            <Link to={`/wine-info/${newWine.id}`}> <Button> More Info</Button></Link>
                        </Card.Body>
                    </Card>
                    </div>
                }
            </form>
        </>
    )
}
export default AddWine