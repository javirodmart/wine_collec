import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link, Route, useParams } from "react-router-dom"
import BrandCard from "./BrandCard"
import WineInfo from "./WineInfo"


const AllWines = ({ brand ,deleteBrand, handelNewBrand}) => {
    const { id } = useParams()
    const [wines, setWines] = useState([])
    console.log(brand)
    const wineArray =
        brand.map((brands) => {
            return (
                <>
                    <BrandCard key={brands.id} handelNewBrand={handelNewBrand} deleteBrand={deleteBrand}
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
            <Link to="/add_brand"><Button>Add a Brand</Button></Link>
            <div className="cards">
                <h1>All Brands</h1>
                {wineArray}
            </div>
        </>
    )
}
export default AllWines