import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./Serives.css"

export const Service = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.5, // Adjust threshold as needed
  });

  const services = [
    '1.Social Media Content Strategy',
    '2.Digital Community Engagement',
    '3.Influencers campaign',
    '4.Brand Image Development',
    '5.Outreach Campaign Oversight',
    '6.Visual storytelling / Image crafting',
    '7.product/lifestyle/conceptual imagery creation',
    '8.Visual Brand Narration',
    '9.User-Generated Storytelling',
  ];

  return (
    <div className='service bg-white p-10' ref={ref}>
      <p className="s-main-text text-center text-9xl font-bold">SERVICES</p>
      {services.map((service, index) => (
        <AnimatedHeader
          key={index}
          inView={inView}
          index={index}
          text={service}
        />
      ))}
    </div>
  );
};

const AnimatedHeader = ({ inView, index, text }) => {
  const position = (index % 2 === 0) ? 'left' : 'right';
  const animationClass = inView ? `animate-${position}` : '';

  return (
    <>
      <p className={`s-text text-${position} text-4xl font-extrabold text-uppercase mt-4 ${animationClass}`}>
        {text}
      </p>
      <hr className={`border-dashed border-1 border-gray-400 my-8`}></hr>
    </>
  );
};

