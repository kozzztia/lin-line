import React from 'react';
import style from "./style.module.scss"
import Card from "./card/Card";


const CardList = ({data}) => {
    return (
        <ul className={style.cardList}>
            {
                data.map(item =>{
                    return <Card
                        key = {item.id}
                        data={item}
                    />
                })
            }
        </ul>
    );
};

export default CardList;