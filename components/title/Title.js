import React from 'react';
import style from "./style.module.scss";
import {findIcon} from "../../utils/findIcon";

const Title = ({title , icon}) => {
    return (
        <div className={style.title}>
            {findIcon(icon ,3, '#20b2ff')}
            <h2>{title}</h2>
        </div>
    );
};

export default Title;