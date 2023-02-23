import React from 'react';
import data from "../../staticData/staticData"
import Number from "../../components/number/Number"
import style from"./style.module.scss"
import UpBtn from "../../components/upBtn/UpBtn";
const FooterLayout = () => {
    const {contacts} = data.contactsValues
    return (
        <div className={`fullScreenBackground  ${style.footer}`} >
            <div className={`main-wrapper ${style.footer__content}`}>
                {
                    contacts.map(item => <Number data={item} key={item.id} />)
                }
            </div>
            <UpBtn />
        </div>
    );
};

export default FooterLayout;