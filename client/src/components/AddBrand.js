import { useEffect, useState } from "react"
import { Card, Button } from "react-bootstrap"
import { Link, Redirect, useHistory , useParams} from "react-router-dom"


const AddBrand = ({ Brand, brand, location, handelNewBrand, }) => {
    const history = useHistory()
    const [formData, setFormData] = useState({
        name: '',
        description: "",
        est: ""
    })
    const [errors, setErrors] = useState([]);
    const [newBrand, setNewBrand] = useState([])
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
        const NewBrand = formData
        console.log(formData)
        fetch("/brands", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(NewBrand),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then((data) => (setNewBrand(data),setHide("new-Brand-card")))
                } else {
                    res.json().then((errorData) => setErrors(errorData.errors))
                }
            })
            setId(NewBrand.id)
    }
console.log(id)
    
    function handleHide(){
        setHide("new-Brand-card")
    }
    console.log(newBrand.id)
    return (
        <>
            <h2>New Brand</h2>
            <form onSubmit={handleSubmit}>
                <h5>Name:</h5>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <br></br>
                <h5>Description:</h5>
                <input type="text" name="description" placeholder="description" value={formData.description} onChange={handleChange} />
                <br></br>
                <h5>est:</h5>
                <input type="text" name="est" placeholder="est year" value={formData.est} onChange={handleChange} />
               
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
                            <Card.Title>{newBrand.name}</Card.Title>
                            <img className="img" variant="top" src={newBrand.img_url} />
                            <Card.Text>
                                {newBrand.isVintage}
                            </Card.Text>
                            <Link to={`/Brand-info/${newBrand.id}`}> <Button> More Info</Button></Link>
                        </Card.Body>
                    </Card>
                    </div>
                }
            </form>
        </>
    )
}
export default AddBrand