import React from 'react';
import style from './style.module.scss';
import {findIcon} from "@/utils/findIcon"


const Service = ({data}) => {
    const {id, title , icon  } = data
    return (
        <div className={style.service}>
            {findIcon(icon , 3 , '#20b2ff' , 15)}
            <p className={style.service__title}>{title}</p>
        </div>
    );
};

export default Service;