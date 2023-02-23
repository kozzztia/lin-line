
import style from "./style.module.scss";
import data from "../../staticData/staticData";
import Logo from "../../components/logo/Logo";
import Number from "../../components/number/Number";
import ServicesLayout from "../servicesLayout/ServicesLayout";

const ContactsLayout = () => {
    const contactsValues = data.contactsValues.contacts;
    return (
        <>
        <div className={`${style.contacts} main-wrapper`} id='contacts'>
            <Logo/>
            {
                contactsValues.map(item => <Number key = {item.id}data={item}/>)
            }
        </div>
            <ServicesLayout data={data.contactsValues.services}/>
        </>
    );
};

export default ContactsLayout;