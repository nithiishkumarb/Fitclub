import React from 'react'
import "./Hero.css"
import Header from "../Header/Header"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='left-h'>
        <Header/>
        <div className='the-best-ads'>
          <div></div>
            <span>The best fitness club in the town</span>
        </div>
        <div className='hero-text'>
            <div className=''>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div>
            <div><span>Ideal body</span></div>
            <div>ideal body we will help you to shape and build your ideal body  and live up your life to fullest</div>
        </div>
        {/* Figures */}
        <div className='figures'>
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+987</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness program</span>
          </div>
        </div>
        {/* Hero buttons */}
        <div className='hero-buttons'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>
      {/* Right heading */}
      <div className='right-h'>
        <button className='btn'>Join Now</button>
        <div className='heart-rate'>
          <img src={heart} alt="heart"/>
          <span>Heart rate</span>
          <span>116 bpm</span>
        </div>
        <img src={hero_image} alt='hero' className='hero-image'/>
        <img src={hero_image_back} alt='hero' className='hero-image-back'/>
        {/* calories */}
        <div className='calories'>
          <img src={calories} alt="calories"/>
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero