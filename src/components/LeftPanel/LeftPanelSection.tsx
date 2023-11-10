import Bell from "../../assets/Icons/Bell";
import Eye from "../../assets/Icons/Eye";
import InfoSection from "../InfoSection";
import cohortsImg from '../../assets/images/cohorts1.png'
import './leftPanelSection.css'
import LochLogo from "../../assets/Icons/LochLogo";
import NotificationSettingsCarousel from "./NotificationSettingsCarousel";
import Testimonials from "./Testimonials";

const LeftPanelSection = () => {
  return (
    <div className="leftPanelSection" style={{ background: 'linear-gradient(45deg, #1FA911 10%, #2F15D0 50%, #000000 90%)', padding: '44px 0 44px 60px' }}>
      <div className={`sectionWrapper1`}>
        <InfoSection
          className={'infoSection1'}
          assets={{
            icon: <Bell />,
            heading: 'Get notified when a highly correlated whale makes a move',
            description: 'Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.',
            alignment: 'text-left'
          }}
        />
        <NotificationSettingsCarousel />
      </div>
      <div className={`sectionWrapper2 pt-16`}>
        <div style={{width: '335px', boxShadow: '0 8px 22px #18274B1F'}}>
          <img src={cohortsImg} />
        </div>
        <InfoSection
          className={'infoSection2'}
          assets={{
            icon: <Eye />,
            heading: 'Watch what the whales are doing',
            description: 'All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.',
            alignment: 'text-right'
          }}
        />
      </div>
      <h1 className={`testinomialHeading pt-5 pr-16 text-right`}>
        Testimonials
      </h1>
      <hr className={`mr-16 mt-5`} style={{borderColor: '#E5E5E680'}} />
      <div className={`footer flex justify-between`}>
        <div className={`flex items-end pt-14`}>
          <LochLogo />
        </div>
        <Testimonials />
      </div>
    </div>
  );
}

export default LeftPanelSection;
