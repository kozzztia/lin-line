import React from 'react';
import {findIcon} from "../../utils/findIcon";

const Preloader = () => {
    return (
        <>
        {findIcon("LoadingOutlined")}
        </>
    );
};

export default Preloader;