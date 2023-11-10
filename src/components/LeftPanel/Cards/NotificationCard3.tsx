import CheckBox from '../../../assets/Icons/CheckBox';
import Clock from '../../../assets/Icons/Clock';
import Timeline from '../../../assets/Icons/Timeline';
import './card.css'

const NotificationCard3 = () => {
  return (
    <div className="card notificationCard">
        <div style={{display: "flex", justifyContent: 'space-between'}}>
            <Clock />
            <CheckBox />
        </div>
        <p className="font-inter text-base font-medium leading-4 tracking-normal text-left pt-3.5">Notify me when any wallet dormant for</p>
        <Timeline />
        <p className="font-inter text-sm font-medium leading-4 tracking-normal text-left pt-3.5">becomes active</p>
    </div>
  );
}

export default NotificationCard3;
