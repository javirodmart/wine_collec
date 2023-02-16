import React, { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
const LocationInfo = ({ brands, user, onUpdateItem }) => {
    const { id } = useParams()
    const [location, setLocation] = useState([])
    const [errors, setErrors] = useState([]);
    const [newWine, setNewWine] = useState([])
    const [hide, setHide] = useState("hide")
    const [brandName, setBrandName] = useState([])

    useEffect(() => {
        fetch(`/locations/${id}`)
            .then((r) => r.json())
            .then((data) => (
                setLocation(data),
                setFormData(data)
            ));
    }, []);





    const history = useHistory()
    // const dataInfo = {
    //     name: `${wine.name}`,
    //     vintage: wine.vintage,
    //     blend: wine.blend,
    //     flavor_profile: wine.flavor_profile,
    //     description: wine.description,
    //     img_url: wine.img_url,
    //     brand_id: wine.brand_id,
    //     location_id: wine.location_id
    // }
    const [formData, setFormData] = useState([])

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedLocation = formData
        console.log(formData)
        fetch(`/locations/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedLocation),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then((data) => (setLocation(data), setHide("hide")))
                } else {

                }
            })
    }

    const handleDelete = () => {
        fetch(`locations/${id}`, {
            method: "DELETE"
        })
        history.push(`/all_locations`)
    
    }

    function handleHide() {
        if (hide === "hide")
            setHide("update-form")
        else {
            setHide("hide")
        }
    }
    console.log(location)
    return (
        <> {user.admin ?
            <div className="edit-button" >
            <Button onClick={handleHide}> Edit Location </Button>

            <form className={hide} onSubmit={handleSubmit}>
                <h2>Edit Location</h2>
                <h5>Country:</h5>
                <input type="text" name="region" placeholder="Region" value={formData.region} onChange={handleChange} />
                <br></br>
                <h5>Region:</h5>
                <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
                <br></br>
                <h5>Region:</h5>
                <input type="text" name="img_url" placeholder="Image" value={formData.img_url} onChange={handleChange} />
                <br></br>
                <h5>Description:</h5>
                <textarea type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
                <br></br>
                <br></br>
                {errors.length > 0 && (
                    <ul style={{ color: "red" }}>
                        {errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                )}
                <button onSubmit={handleSubmit}>Submit</button>
                <Button onClick={handleDelete} >Delete</Button>


            </form>
        </div>
        : null }
           
            <h1 className="headers">Brand Info</h1>
            <div className="wine-info">
                <h3>{location.region}</h3>
                <br></br>
                <h3>Country:</h3>
                <h3>{location.country}</h3>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>A Little About The Brand </h4>
                <h5>{location.description}</h5>
            </div>
            <div className="brand-info-img" >
                <img src={location.img_url} />
            </div>


        </>
    )
}

export default LocationInfo