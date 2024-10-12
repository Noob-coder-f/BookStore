import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import list from '../../public/List.json'
import Card from './Card';

function Freebook() {
    const filterData = list.filter((data) => {   //filter function Array ke sath use hota h aur object return krta h
        if (data.category === "free") {
            // console.log(data)
            return data;
        }
    });
    // console.log(filterData)

    


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    
    return (
        <>
            <div className='max-w-screen-2xl mx-auto md:px-20 px-4 container'>
                <div><h1 className='font-semobold text-xl mb-2' >Free Offered Book</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate nulla sapiente nisi vel sunt reiciendis! Quidem consectetur velit fuga possimus repellendus quaerat assumenda maxime doloremque asperiores, voluptatum cupiditate deserunt tenetur.</p>
                </div>
                <div>
                <Slider {...settings} >
                    {filterData.map((item) =>
                        <Card item={item} key={item.id} />)}

                </Slider>

                </div>
            </div>

        </>
    )
}

export default Freebook
