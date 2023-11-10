import TestimonialCard from "./Cards/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="testimonials w-full ml-11 mt-11 relative h-fit">
        <div className={`cardsWrapper`}>
          <TestimonialCard details={{name: 'Jack F', designation: 'Ex Blackrock PM', quote: `“Love how Loch integrates portfolio analytics and whale watching into one unified app.”`}} />
          <TestimonialCard details={{name: 'Yash P', designation: 'Research, 3poch Crypto Hedge Fund', quote: `“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”`}} />
          <TestimonialCard details={{name: 'Shiv S', designation: 'Co-Founder Magik Labs', quote: `“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”`}} />
        </div>
    </div>
  );
}

export default Testimonials;
