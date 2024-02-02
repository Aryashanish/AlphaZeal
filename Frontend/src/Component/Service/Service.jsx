// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Services.css';

const RevealText = ({ index, text, startAnimation }) => {
  const [placeholder, setPlaceholder] = useState('');
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    let isMounted = true;

    function tick() {
      if (isMounted) {
        setPlaceholder((prev) => prev + text[placeholder.length]);
      }
    }

    if (inView && !animationTriggered && startAnimation) {
      if (placeholder.length < text.length) {
        let addChar = setInterval(tick, 100);
        return () => {
          clearInterval(addChar);
          isMounted = false;
        };
      }

      setAnimationTriggered(true);
    }
  }, [inView, animationTriggered, placeholder, startAnimation, text]);

  return (
    <div
      ref={ref}
      className={`s-text ${index % 2 === 0 ? 'text-left' : 'w-1/2 ml-auto flex justify-start'} text-4xl font-bold my-4`}
    >
      {placeholder}
    </div>
  );
};

export const Service = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const services = [
    '1. Social Media Content Strategy..',
    '2. Digital Community Engagement',
    '3. Influencers campaign',
    '4. Brand Image Development',
    '5. Outreach Campaign Oversight',
    '6. Visual storytelling / Image crafting',
    '7. Product/lifestyle imagery creation',
    '8. Visual Brand Narration',
    '9. User-Generated Storytelling',
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setCurrentSentenceIndex((prevIndex) => prevIndex + 1);
      }, 2000); // 2 seconds delay between sentences
    }
  }, [inView, currentSentenceIndex, services.length]);

  return (
    <div className="service bg-white p-10 py-4" ref={ref}>
      <p className="s-main-text text-center text-9xl font-bold">SERVICES</p>
      {services.map((service, index) => (
        <RevealText key={index} index={index} text={service} startAnimation={index <= currentSentenceIndex} />
      ))}
      {/* <hr className="border-dashed border-1 border-gray-400 my-8"></hr> */}
    </div>
  );
};
