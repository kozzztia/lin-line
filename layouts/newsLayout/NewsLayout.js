import React from 'react';
import style from "./style.module.scss";
import Title from "../../components/title/Title";
import CardList from "../../components/cardList/CardList";
import data from"../../staticData/staticData"

const NewsLayout = () => {
    const {title , icon , news} = data.newsValues;
    return (
        <div className={`main-wrapper`} id='news'>
            <Title title={title} icon={icon}/>
            <CardList data={news}/>
        </div>
    );
};

export default NewsLayout;