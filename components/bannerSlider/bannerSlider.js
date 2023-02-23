import React, {useEffect, useState} from 'react';
import style from './style.module.scss';

import data from '../../staticData/staticData.js'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import {A11y, Navigation, Scrollbar} from 'swiper'
import {Swiper, SwiperSlide} from "swiper/react";
import BannerSlide from "./bannerSlide/BannerSlide";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
const BannerSlider = () => {
    const bannerValues = data.bannerValues;
    return (
        <Swiper
            className={style.slider}
            modules={[Navigation, Scrollbar, A11y ]}
            spaceBetween={100}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            {
                bannerValues.map(item =>{
                    return (
                    <SwiperSlide key={item.id}>
                        <BannerSlide data = {item}/>
                    </SwiperSlide>
                    )
                })
            }
            {/*<SwiperSlide>Slide 1</SwiperSlide>*/}
        </Swiper>
    );
};

export default BannerSlider;