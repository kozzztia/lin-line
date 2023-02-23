import React from 'react';
import style from "./style.module.scss";
import CardArticle from "./cardarticle/CardArticle";
import Link from "next/link";
import findBackground from "../../backgroundImage/BackgroundImage";



const Card = ({data}) => {
        const {link , linkTitle , title , backGround} = data;
    return (
        <div className={style.card}>
            {findBackground(backGround)}
            <CardArticle data = {data}/>
            <Link
                className={style.card__links}
                href={link} value={title}>
                {linkTitle}
            </Link>
        </div>
    );
};

export default Card;