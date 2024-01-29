// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { VideoCard } from '../VideoCard/VideoCard';
import './Featured.css';

export const Featured = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="featured-container">
      <div className="p-4 featured-section">
        <p className={`f-main-text text-center text-9xl font-bold text-white ${inView ? 'animate-slideInLeft' : ''}`} ref={ref}>FEATURED WORK</p>
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
