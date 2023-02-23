import {
    ApartmentOutlined,
    BankOutlined,
    CoffeeOutlined,
    DesktopOutlined,
    HomeOutlined,
    LoadingOutlined,
    LoginOutlined,
    MobileOutlined,
    PhoneOutlined,
    QuestionOutlined,
    StarOutlined,
    ThunderboltOutlined,
    GlobalOutlined,
    MenuOutlined,
    BulbOutlined,
    ToolOutlined,
    LikeOutlined,
    TeamOutlined, ExclamationOutlined, UpOutlined, MessageOutlined, CheckSquareOutlined
} from "@ant-design/icons";
export const findIcon = (icon, size = 2, color = '#20b2ff' , right = 15) => {
    const style =
        {fontSize:`${size+"em"}`,
            color:color ,
            marginRight: `${right+"px"}`,
            position:"relative",
        }
    switch (icon) {
        case "ApartmentOutlined" :return <ApartmentOutlined style={{...style}}/>;
        case "LoginOutlined" :return <LoginOutlined style={{...style}}/>;
        case "DesktopOutlined" :return <DesktopOutlined style={{...style}}/>;
        case "MobileOutlined" :return <MobileOutlined style={{...style}}/>;
        case "PhoneOutlined" :return <PhoneOutlined style={{...style}}/>;
        case "QuestionOutlined" :return <QuestionOutlined style={{...style}}/>;
        case "LoadingOutlined" :return <LoadingOutlined style={{...style}}/>;
        case "StarOutlined" :return <StarOutlined  style={{...style}}/>;
        case "CoffeeOutlined" :return <CoffeeOutlined  style={{...style}}/>;
        case "BankOutlined" :return <BankOutlined  style={{...style}}/>;
        case "HomeOutlined" :return <HomeOutlined  style={{...style}}/>;
        case "ThunderboltOutlined" :return <ThunderboltOutlined  style={{...style}}/>;
        case "GlobalOutlined" :return <GlobalOutlined  style={{...style}}/>;
        case "MenuOutlined" :return <MenuOutlined  style={{...style}}/>;
        case "BulbOutlined" :return <BulbOutlined  style={{...style}}/>;
        case "ToolOutlined" :return <ToolOutlined  style={{...style}}/>;
        case "TeamOutlined" :return <TeamOutlined  style={{...style}}/>;
        case "LikeOutlined" :return <LikeOutlined  style={{...style}}/>;
        case "ExclamationOutlined" :return <ExclamationOutlined  style={{...style}}/>;
        case "UpOutlined" :return <UpOutlined  style={{...style}}/>;
        case "MessageOutlined" :return <MessageOutlined  style={{...style}}/>;
        case "CheckSquareOutlined" :return <CheckSquareOutlined  style={{...style}}/>;
        default : return null
    }
}
