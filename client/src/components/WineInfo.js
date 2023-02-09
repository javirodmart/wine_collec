import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
const WineInfo = ({ wineData }) => {
    const { id } = useParams()
    const [wine, setWine] = useState([])
    const [isVintage, setIsVintage] = useState([])

    useEffect(() => {
        fetch(`/wines/${id}`)
            .then((r) => r.json())
            .then((data) => (
                setWine(data),
                setIsVintage(data.vintage)
            ));
    }, []);
    if (isVintage === 0) {
        setIsVintage("Not Vintage")
    }
    console.log(isVintage)
    return (
        <>

            <h1 className="headers">Wine Info</h1>
            <div className="wine-info">
                <h3>{wine.name}</h3>
                <br></br>
                <h4>Vintage: </h4>
                <h5>{isVintage}</h5>
                <br></br>
                <h4>Blend: </h4>
                <h5>{wine.blend}</h5>
                <br></br>
                <h4>Flavor Profile: </h4>
                <h5>{wine.flavor_profile}</h5>
                <br></br>
                <br></br>
                <h4>A Little About The Wine </h4>
                <h5>{wine.description}</h5>
            </div>
            <div className="wine-info-img" >
                <img src={wine.img_url} />
            </div>


        </>
    )
}

export default WineInfo