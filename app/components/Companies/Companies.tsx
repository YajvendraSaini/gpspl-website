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
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <div className="py-8 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
                    Trusted by Leading Organizations
                </h2>
                <div className="mt-8">
                    <Slider {...settings} className="company-slider">
                        {data.map((item, i) => (
                            <div key={i} className="px-3">
                                <div className="flex items-center justify-center min-h-[100px]">
                                    <Image 
                                        src={item.imgSrc} 
                                        alt="company-logo" 
                                        width={150} 
                                        height={50} 
                                        className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Companies;
