import React, { useRef } from 'react';
import './works.css';
import Project1 from '../../assets/project1.mp4';
// import Progress from '../../assets/progress.jpg';

const Works = () => {
  const videoRef = useRef(null);

  const handleMouseOver = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // Autoplay was prevented, handle it here
        console.error('Autoplay prevented:', error);
      });
      videoRef.current.playbackRate = 1.5; // Set playback speed to 1.5x
    }
  };

  const handleMouseOut = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">
          Passionate web developer with a flair for transforming innovative
          ideas into visually stunning and seamlessly functional websites.
          Expert in crafting elegant, responsive designs that elevate user
          experiences and drive digital success.
        </span>
      <h3 className="project">Project Work</h3>

      <div className="projectOne">
        <h4>
          &#8544;&nbsp;.&nbsp;A professional website built with the cutting-edge
          features of Bootstrap v5.3
        </h4>
        <video
          ref={videoRef}
          src={Project1}
          alt=""
          className="workImg"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          autoPlay={false}
          controls // Add controls for video navigation
        />
        <h4 className="githublink">
          Source Code :-{" "}
          <a
            className="link"
            href="https://github.com/TusharAGosavi/Bootstrap-5.3"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/TusharAGosavi/Bootstrap-5.3
          </a>
        </h4>
      </div>
    {/* <div className='projectOne'>
      <h4 >
        &#8545;&nbsp;.&nbsp;
      </h4>
      <img src={Progress} alt='bg' className='workImg'/> */}
      {/* <video
          ref={videoRef}
          src={Project1}
          alt=""
          className="workImg"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          autoPlay={false}
          controls // Add controls for video navigation
        /> */}
      {/* <h4 className='githublink'>Source Code :- <a className="link" href='https://github.com/TusharAGosavi/Project-Work.git' to="route" target="_blank" rel="noopener noreferrer">...</a></h4>
      
    </div> */}
  </section>
  );
};

export default Works;