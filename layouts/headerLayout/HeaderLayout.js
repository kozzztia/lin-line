
import HeaderNavigation from "../../components/headerNavigation/HeaderNavigation";
import data from "../../staticData/staticData";
const HeaderLayout = () => {
        const headerValues = data.headerValues
    return (
            <div className="fullScreenBackground" id="header">
                <nav className= "main-wrapper">
                    <HeaderNavigation data={headerValues}/>
                </nav>
            </div>
    );
};

export default HeaderLayout;