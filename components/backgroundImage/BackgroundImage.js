import Image from "next/legacy/image";
import style from "./style.module.scss";
import internet from "../../public/internetBG.jpg";
import logo from "../../public/logo-main.png";

const BackgroundImage= ({image}) => {
    return (
        <Image
            className={style.background}
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority={true}
            alt='background'/>
    );
};

const findBackground = (image) =>{
    switch (image) {
        case "internet": return <BackgroundImage image={internet}/>
        case "logo": return <BackgroundImage image={logo}/>
        default : return <BackgroundImage image={internet}/>
    }
}

export default findBackground;