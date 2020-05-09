import React from 'react';
import PropTypes from 'prop-types';
import {StyledHeroImage} from '../styledComp/StyledHeroImage';

const HeroImage = ({title, text, image}) => {
 return (
  <StyledHeroImage image={image}>
   <div className='heroimage-content'>
    <div className='heroimage-text'>
     <h1>{title}</h1>
     <p>{text}</p>
    </div>
   </div>
  </StyledHeroImage>
 );
};
HeroImage.propTypes = {
 text: PropTypes.string,
 title: PropTypes.string,
 image: PropTypes.string,
};

export default HeroImage;
