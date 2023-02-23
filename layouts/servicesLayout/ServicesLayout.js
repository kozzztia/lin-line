import React from 'react';
import Services from "../../components/services/Services";

const ServicesLayout = ({data}) => {
    return (
        <>
            <Services data = {data}/>
        </>
    );
};

export default ServicesLayout;