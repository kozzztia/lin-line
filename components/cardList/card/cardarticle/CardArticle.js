import React from 'react';
import style from "./style.module.scss";
import Link from "next/link";

const CardArticle = ({data}) => {
    const {title,plan,speed,cost} = data
    return (
        <div className={style.article}>
            <h2 className={style.article__title}>{title}</h2>
            <article className={style.article__text}>
                <p>{plan}</p>
                <p>{speed}</p>
                <p>{cost}</p>
            </article>
        </div>
    );
};

export default CardArticle;