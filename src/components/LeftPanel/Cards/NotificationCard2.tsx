import Analytics from "../../../assets/Icons/Analytics";
import CardBell from "../../../assets/Icons/CardBell";
import CheckBox from "../../../assets/Icons/CheckBox";
import Dropdown from "../../../assets/Icons/Dropdown";
import './card.css'

const NotificationCard2 = () => {
  return (
    <div className="card notificationCard">
        <div style={{display: "flex", justifyContent: 'space-between'}}>
            <Analytics />
            <CheckBox />
        </div>
        <p className="font-inter text-base font-medium leading-4 tracking-normal text-left pt-3.5">Notify me when any wallets move more than</p>
        <Dropdown />
    </div>
  );
}

export default NotificationCard2;
