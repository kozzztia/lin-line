import React from 'react';
import Image from "next/legacy/image";
import style from "./style.module.scss";
import bannerBG from "../../public/internetBG.jpg";


const BannerBackground = () => {
    return (
        <div className={style.bannerBGImage}

        >
            <Image
                className={style.bannerBGImage__img}
                src={bannerBG}
                layout={'fill'}
                alt="BG"
                priority
            />
        </div>
    );
};

export default BannerBackground;