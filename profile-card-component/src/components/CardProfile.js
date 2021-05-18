import Bottomimage from '../images/bg-pattern-bottom.svg';
import Profile from '../images/image-victor.jpg';
import React from 'react';
import Topimage from '../images/bg-pattern-top.svg';

const CardProfile = () => {
  return (
    <div>
      {/* background images used  */}
    <img src={Topimage} alt="Top"  className="img__top"/>
    <img src={Bottomimage} alt="Bottom" className="img__bottom" />
    {/* End-background images  used */}

    {/* Top */}
    <div className="top">
      <div className="image__bg">
        <img src={Profile} alt="Profile Picture" className="img__profile" />
        </div>
      </div>
      {/* End-Top */}

      {/* Bottom */}
      <div className="bottom">
        
        {/* name__section */}
        <div className="name__section">
          <h2>Victor Crest</h2>
          <p>26</p>
          </div>
          <p className="city"> London</p>

          {/* social media */}
          <div className="socialMedia">
            <div className="social__card">
              <h2 className="card__title">80K</h2>
              <p className="content__card"> Followers</p>
            </div>
            <div className="social__card">
              <h2 className="card__title">803K</h2>
              <p className="content__card"> Likes</p>
            </div>
            <div className="social__card">
              <h2 className="card__title">1.4k</h2>
              <p className="content__card"> Photos</p>
            </div>
             {/* social media */}
           </div>
           {/* name__section */}
           </div>
      {/* End-Bottom */}
      








    </div>
    
    
    
      
   
  )
}

export default CardProfile;
