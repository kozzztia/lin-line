import React from 'react';
import style from "./style.module.scss"
import data from '../../staticData/staticData'
import Title from "../../components/title/Title";
import CardList from "../../components/cardList/CardList";
import ServicesLayout from "../servicesLayout/ServicesLayout";

const RateLayout = () => {
    const {rateTitle, rateIcon, includesTitle, includesIcon, services , cards} = data.rateValues;
    return (
        <>
            <div className={`${style.rate} main-wrapper`} id="rate">
                <Title title={rateTitle} icon={rateIcon}/>
                <CardList
                    data={cards}
                />
            </div>

            <div className="main-wrapper">
                <Title title={includesTitle} icon={includesIcon}/>
                <ServicesLayout data={services}/>
            </div>
        </>
    );
};

export default RateLayout;