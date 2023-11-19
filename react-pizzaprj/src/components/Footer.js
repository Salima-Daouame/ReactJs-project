import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

const SocialMediaIcon = ({ icon, name }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="social-media-icon">
      <a href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {icon}
      </a>
      <span className={`hover-name ${isHovered ? 'active' : ''}`}>{name}</span>
    </div>
  );
};

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <SocialMediaIcon icon={<InstagramIcon />} name="Instagram" />
        <SocialMediaIcon icon={<TwitterIcon />} name="Twitter" />
        <SocialMediaIcon icon={<FacebookIcon />} name="Facebook" />
        <SocialMediaIcon icon={<LinkedInIcon />} name="LinkedIn" />
      </div>
      <p>&copy; 2023 salimapizza.com</p>
    </div>
  );
}

export default Footer;