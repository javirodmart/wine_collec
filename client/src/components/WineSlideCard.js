import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useState } from "react"
import { Card, Button } from "react-bootstrap"
import { Link, Route, Switch, useHistory } from "react-router-dom"


function WineSlideCard({ id, name, image, vintage }) {
    console.log(name)
   return(
    <span>hello{name}</span>

   )
}
export default WineSlideCard