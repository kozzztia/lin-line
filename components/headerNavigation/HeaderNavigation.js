import React from "react";
import NavigationItem from "./NavigationItem";
import style  from "./style.module.scss";


const HeaderNavigation = ({data}) => {
    return (
        <ul className={style.list}>
            {
                data.map(item=>
                    <NavigationItem
                        className={style.list__item}
                        classNameBtn={style.list__btn}
                        key={item.id}
                        item={item}
                    />)
            }
        </ul>
    );
};

export default HeaderNavigation;