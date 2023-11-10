import NotificationCard from "./Cards/NotificationCard";
import NotificationCard2 from "./Cards/NotificationCard2";
import NotificationCard3 from "./Cards/NotificationCard3";

const NotificationSettingsCarousel = () => {
  return (
    <div className="notificationSettings w-full ml-11 mt-11 relative h-fit">
        <div className="rightShadow"></div>
        <div className={`cardsWrapper carousel`}>
          <NotificationCard />
          <NotificationCard2 />
          <NotificationCard3 />
        </div>
        <div className="leftShadow"></div>
    </div>
  );
}

export default NotificationSettingsCarousel;
