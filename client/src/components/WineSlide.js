import React, { useState,useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import WineSlideCard from './WineSlideCard';




function WineSlide() {
    const images = [
        
    ];
    const [wine,setWine] = useState([])

    useEffect(() => {
        fetch("/loginWines")
          .then((r) => r.json())
          .then((data) => setWine(data));
      }, []);
        console.log(wine.name)
      const wineArray = wine.map((wines)=>{
         <WineSlideCard   id={wines.id}
        // name={wines.name}
        // vintage={wines.vintage}
        // image={wines.img_url}
        data={wines} />
      })
    return (
        <>
        
        <Slide className="slide">
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>

                    <span>{wineArray}</span>

                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                    {wineArray}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
     </>
    )
}

export default WineSlide;