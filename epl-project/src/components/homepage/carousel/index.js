import React,{useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Carousel1 from "../../../images/carousel1.png"
import Carousel2 from "../../../images/carousel2.png"
import Carousel3 from "../../../images/carousel3.png"

const listCarousel= [
  Carousel1,
  Carousel2,
  Carousel3
]


export default function(props)
{

    return (
        <Carousel showThumbs={false}>
            {
                listCarousel.map((carousel,index)=>{
                    return (
                    <div key={index}>
                        <img src={carousel} />
                    </div>)
                })
            }
        </Carousel>
    )
}