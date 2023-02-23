import React from 'react';
import Head from "next/head";

const HeadComponent = () => {
    return (
        <Head>
            <title>lan-line</title>
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <meta name={'title'} content={'інтернет без світла'}/>
        </Head>
    );
};

export default HeadComponent;