import CardBell from "../../../assets/Icons/CardBell";
import './card.css'

const NotificationCard = () => {
  return (
    <div className="card notificationCard">
        <div style={{display: "flex", justifyContent: 'space-between'}}>
            <CardBell />
            <span style={{fontSize: '9.1px', lineHeight: '10.9px', fontWeight: '600'}}>Save</span>
        </div>
        <p className="font-inter text-base font-medium leading-4 tracking-normal text-left pt-3.5">We'll be sending notifications to you here</p>
        <input
          type="text"
          name="email"
          id="email"
          className="notifyEmail w-full block rounded-md border-0 mt-4 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-2 focus:ring-2 focus:ring-inset hover:ring-inset sm:text-sm sm:leading-6"
          placeholder="name@email.com"
        />
    </div>
  );
}

export default NotificationCard;
