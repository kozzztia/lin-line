import React from 'react';
import Image from 'next/legacy/image';
import picture from '../../public/logo-main.png'
import style from './style.module.scss'

const Logo = () => {
    return (
        <div className={style.logo}>
            <Image
                className={style.logo__picture}
                src={picture}

                layout={'intrinsic'}
                alt="logo"
                priority
            />
        </div>

    );
};

export default Logo;