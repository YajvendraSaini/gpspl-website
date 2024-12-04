"use client"
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/assets/carousel/1.png"
    },
    {
        imgSrc: "/assets/carousel/2.png"
    },
    {
        imgSrc: "/assets/carousel/3.png"
    },
    {
        imgSrc: "/assets/carousel/4.png"
    },
    {
        imgSrc: "/assets/carousel/5.png"
    },
    {
        imgSrc: "/assets/carousel/6.png"
    },
    {
        imgSrc: "/assets/carousel/7.png"
    },
    {
        imgSrc: "/assets/carousel/8.png"
    },
    {
        imgSrc: "/assets/carousel/9.png"
    },
    {
        imgSrc: "/assets/carousel/10.png"
    },
    {
        imgSrc: "/assets/carousel/11.png"
    },
    {
        imgSrc: "/assets/carousel/12.png"
    },
    {
        imgSrc: "/assets/carousel/13.png"
    },
    {
        imgSrc: "/assets/carousel/14.png"
    },
    {
        imgSrc: "/assets/carousel/15.png"
    },
    {
        imgSrc: "/assets/carousel/16.png"
    }

    
]

const Companies = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
            <Slider {...settings}>
                {data.map((item, i) => (
                    <div key={i} className="flex items-center justify-center h-full">
                        <Image 
                            src={item.imgSrc} 
                            alt="carousel-img" 
                            width={180} 
                            height={120} 
                            className="object-contain"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Companies;
