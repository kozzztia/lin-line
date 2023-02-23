import React from 'react';
import style from "../bannerLayout/style.module.scss";
import BannerBackground from "../../components/bannerBackground/BannerBackground";
import BannerSlider from "../../components/bannerSlider/bannerSlider";



const BannerLayout = () => {
    return (
        <div className="bannerScreenBackground"
        >
            <BannerBackground />
            <div className={`${style.banner} main-wrapper`}>
                <BannerSlider/>
            </div>
        </div>
    );
};

export default BannerLayout;