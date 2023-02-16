import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link, Route, useParams } from "react-router-dom"
import BrandCard from "./BrandCard"
import WineInfo from "./WineInfo"


const AllWines = ({ user, handelNewBrand}) => {
    const { id } = useParams()
    const [wines, setWines] = useState([])
    const [brand,setBrand] = useState([])
    console.log(brand)

    useEffect(() => {
        fetch("/brands")
          .then((r) => r.json())
          .then((data) => setBrand(data));
      }, []);

      function deleteBrand(deleteBrand) {
        const updatedArray = brand.filter((brands) => {
            return brands.id !== deleteBrand
        })
        setBrand(updatedArray)
    }

    const wineArray =
        brand.map((brands) => {
            return (
                <>
                    <BrandCard key={brands.id} user={user} handelNewBrand={handelNewBrand} deleteBrand={deleteBrand}
                        id={brands.id}
                        name={brands.name}
                        description={brands.description}
                        image={brands.img_url}
                        est={brands.est}

                        data={brands}
                    />
                </>
            )
        })


    return (
        <>
             {user.admin ? <Link to="/add_brand"><Button>Add a Brand</Button></Link> :null }
            
            <div className="cards">
                <h1>All Brands</h1>
                {wineArray}
            </div>
        </>
    )
}
export default AllWines