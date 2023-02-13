import React, { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
const BrandInfo = ({ brands,  location, deleteBrand,onUpdateItem }) => {
    const { id } = useParams()
    const [brand, setBrand] = useState([])
    const [isVintage, setIsVintage] = useState([])
    const [errors, setErrors] = useState([]);
    const [newWine, setNewWine] = useState([])
    const [hide, setHide] = useState("hide")
    const [brandName,setBrandName] = useState([])

    useEffect(() => {
        fetch(`/brands/${id}`)
            .then((r) => r.json())
            .then((data) => (
                setBrand(data),
                setFormData(data)
            ));
    }, []);
    if (isVintage === 0) {
        setIsVintage("Not Vintage")
    }

   

   
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
        const NewWine = formData
        console.log(formData)
        fetch(`/brands/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(NewWine),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then((data) => (setBrand(data), setNewWine(data), setHide("hide"), deleteBrand(data)))
                } else {
                   
                }
            })
    }

    const handleDelete = () => {
        fetch(`brands/${id}`, {
            method: "DELETE"
        })
        history.push(`/all_brands`)
    }

    function handleHide() {
        if (hide === "hide")
            setHide("update-form")
        else {
            setHide("hide")
        }
    }
    console.log(brand)
    return (
        <>
            <div className="edit-button" >
                <Button onClick={handleHide}> Edit Brand </Button>

                <form className={hide} onSubmit={handleSubmit}>
                    <h2>Edit Wine</h2>
                    <h5>Name:</h5>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                    <br></br>
                    <h5>Description:</h5>
                    <textarea type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
                    <br></br>
                    <h5>Est:</h5>
                    <input type="number" name="est" placeholder="year" value={formData.est} onChange={handleChange} />
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
            <h1 className="headers">Brand Info</h1>
            <div className="wine-info">
                <h3>{brand.name}</h3>
                <br></br>
                <h3>EST:</h3>
                <h3>{brand.est}</h3>
                <br></br>
                <h4>Location: </h4>
                <h5>{isVintage}</h5>
                <br></br>
                <br></br>
                <br></br>
                <h4>A Little About The Brand </h4>
                <h5>{brand.description}</h5>
            </div>
            <div className="brand-info-img" >
                <img src={brand.img_url} />
            </div>


        </>
    )
}

export default BrandInfo