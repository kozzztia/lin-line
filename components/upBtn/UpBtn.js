
import Link from "next/link";
import {findIcon} from "../../utils/findIcon";
import style from "./style.module.scss"

const UpBtn = () => {
    return (

        <Link href={"#header"} className={style.btn}>
            {
                findIcon("UpOutlined")
            }
        </Link>
    );
};

export default UpBtn;