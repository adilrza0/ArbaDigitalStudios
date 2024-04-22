import React from "react";
import { Autoplay, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";

export default function Crousel() {
  const banners = [
    "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
    "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
    "https://slidebazaar.com/wp-content/uploads/2021/09/product-banner-jpg.webp"
  ];
  return (
    <DIV className="carousel w-full rounded-box">
      <Swiper
        modules={[Autoplay,EffectCreative,]}
        effect=""
        
        spaceBetween={1}
        slidesPerView={1}
        autoplay={{delay:1000}}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => ""}
      >
        {banners.map((ele) => {
          return (
            <SwiperSlide>
              <IMG  src={ele} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </DIV>
  );
}

const DIV=styled.div`
width:100%;
border-radius:20px;



`

const IMG=styled.img`
width:90%;
margin:20px;
border-radius:20px;
height:400px;
`

