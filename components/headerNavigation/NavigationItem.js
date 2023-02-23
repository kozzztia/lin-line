import React from 'react';
import Link from "next/link";
import {findIcon} from "../../utils/findIcon";

const NavigationItem = ({item , className , classNameBtn}) => {
    const {link , title , icon} = item
     if(title === "btn"){
         return (
             <div
                 onClick={()=>console.log('go')}
                 className={`${classNameBtn} ${className}`}>
                 {icon&& findIcon(icon , 2 , '#fff' ,5)}
             </div>
         );
     }else {
         return (
             <li className={className}>
                 {icon && findIcon(icon, 2, '#fff', 5)}
                 <Link href={`${link}`}>
                 {/*<Link href={`404`}>*/}
                     {title}
                 </Link>
             </li>
         );
     }
};

export default NavigationItem;