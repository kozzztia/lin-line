
import ContactsLayout from "../layouts/contactsLayout/ContactsLayout";
import BannerLayout from "../layouts/bannerLayout/BannerLayout";
import RateLayout from "../layouts/rateLayout/RateLayout";
import NewsLayout from "../layouts/newsLayout/NewsLayout";
import ChatLayout from "../layouts/chatLayout/ChatLayout";


const Index = () => {
    return (
        <>
            <ContactsLayout/>
            <BannerLayout/>
            <RateLayout/>
            <ChatLayout/>
            <NewsLayout/>
        </>
    );
};

export default Index;