import style from './style.module.scss'
import Link from "next/link";

const BannerSlide = ({data}) => {
    const {title ,article, id , link , linkTitle} = data
    return (
        <div className = {style.slide}>
            <h2 className={style.slide__title}><srtong>{id}</srtong> : {title}</h2>
            <p className={style.slide__article}> {article}</p>
            <Link className={style.slide__link} href = {`#${link}`}>{linkTitle}</Link>
        </div>
    );
};

export default BannerSlide;