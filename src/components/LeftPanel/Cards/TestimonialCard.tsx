
interface TestimonialCardProps {
    details: {
      name: string;
      designation: string;
      quote: string;
    };
  }

const TestimonialCard: React.FC<TestimonialCardProps> = ({details}) => {
    const { name, designation, quote } = details;
    return (
        <div className="testimonialCard">
            <div className="flex gap-1 items-end">
                <b className="font-inter text-base font-semibold leading-5 tracking-normal text-left" color="#19191A">{name}</b>
                <div className="font-inter text-xs font-medium leading-4 tracking-normal text-left" style={{color: '#96979A'}}>{designation}</div>
            </div>
            <div className="quote font-inter text-base font-medium leading-5 tracking-normal text-left pt-4" style={{color: '#1D2129'}}>{quote}</div>
        </div>
    );
};

export default TestimonialCard;
