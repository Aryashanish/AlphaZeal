// eslint-disable-next-line no-unused-vars
import React, { useState , useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import { VideoCard } from '../VideoCard/VideoCard';
import './Featured.css';



const HeadingText = ({ text, startAnimation }) => {
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
    <h1
      ref={ref}
      className="f-main-text text-center text-9xl font-bold text-white"
    >
      {placeholder}
      
    </h1>
  );
};








export const Featured = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const heading = [
    'FEATURED WORK'
    
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setCurrentSentenceIndex((prevIndex) => prevIndex + 1);
      }, 500); // 2 seconds delay between sentences
    }
  }, [inView, currentSentenceIndex, heading.length]);

  return (
    <div className="featured-container">
      <div className="p-4 featured-section">
        
        {heading.map((service, index) => (
       <div>
         <HeadingText key={index} index={index} text={service} startAnimation={index <= currentSentenceIndex} />
        
       </div>

      ))}
      </div>
        <div className={`flex justify-between p-2`}>
          <VideoCard
            url="https://assets-global.website-files.com/62d57921074baa1ce7275405/63c084f55da78823643adbc3_ThePerfectPants-transcode.mp4"
            title="QUINN"
            desc="COMPROMISED"
          />
          <VideoCard
            url="https://assets-global.website-files.com/62d57921074baa1ce7275405/640fe762f883d05b8f683c6d_HOKABODEGA-transcode.mp4"
            title="BODEGA X HOKA"
            desc="THE WORLD AT LARGE"
          />
        </div>

        <div className={`flex justify-between p-2`}>
          <VideoCard
            url="https://assets-global.website-files.com/62d57921074baa1ce7275405/6363f65c00474db467bed81b_Screen%20Recording%202022-11-03%20at%2011018%20PM-transcode.mp4"
            title="JUNO"
            desc="GRANDMA CABBAGE"
          />
          <VideoCard
            url="https://assets-global.website-files.com/62d57921074baa1ce7275405/6565083be7e4f27ff65c8331_ThumbnailCompressed-transcode.mp4"
            title="CALA x PUBLIC TRANSPORTATION"
            desc="THE PERFECT PANTS"
          />
        </div>

    </div>
  );
};
