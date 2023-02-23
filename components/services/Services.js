import style from "./style.module.scss";
import Service from "./service/Service";
const Services = ({data}) => {
    // console.log(data)
    return (
        <div className={`${style.services} main-wrapper`}>
            {
                data.map(item => <Service key = {item.id} data={item}/>)
            }
        </div>
    );
};

export default Services;