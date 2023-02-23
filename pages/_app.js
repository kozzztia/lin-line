import '../styles/global.scss';
import HeaderLayout from "../layouts/headerLayout/HeaderLayout";
import FooterLayout from "../layouts/footerLayout/FooterLayout";
import React from "react";
import HeadComponent from "../components/head/HeadComponent";

const MyApp = ({Component, pageProps}) => {
    return (
        <>
            <HeadComponent/>
            <main className='main-layout'>
                <HeaderLayout/>
                <Component {...pageProps}/>
                <FooterLayout/>
            </main>
        </>
    );
};

export default MyApp;