import React from 'react';
import style from './style.module.scss';
import {findIcon} from "../../utils/findIcon";


const Number = ({data}) => {
    const {title , number ,id , icon} = data;
    return (
        <div className={style.contact} key={id}>
            <span className={style.contact__title}>
                {findIcon(icon , 3 , '#20b2ff' , 15)}
                <h2 className={style.contact__text}>{title}</h2>
            </span>
            <a className={style.contact__number} href={`tel:${number}`}>{number}</a>
        </div>
    );
};

export default Number;