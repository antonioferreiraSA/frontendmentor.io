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

      </div>
      {/* End-Bottom */}
      








    </div>
    
    
    
      
   
  )
}

export default CardProfile;
