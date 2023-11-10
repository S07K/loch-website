import './infoSection.css'

interface InfoSectionProps {
    className: string;
    assets: {
        icon: React.ReactNode;
        heading: string;
        description: string;
        alignment: string;
        // Add other properties as needed
    };
}

const InfoSection: React.FC<InfoSectionProps> = ({ className, assets }) => {
    return (
        <div className={`${className} flex flex-col items-start gap-4`}>
            <div className={`${assets.alignment} w-full`}>
                {assets.icon}
            </div>
            <h1 className={`heading ${assets.alignment}`}>
                {assets.heading}
            </h1>
            <p className={`description ${assets.alignment}`}>
                {assets.description}
            </p>
        </div>
    );
};

export default InfoSection;
