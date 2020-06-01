import React from 'react';

import LogoFlyingP from './LogoFlyingP';
import SocialLikeHeavyMetal from './SocialLikeHeavyMetal';
import SocialContact from './SocialContact';
import SocialYouTube from './SocialYouTube';
import SocialInstagram from './SocialInstagram';
import SocialFacebook from './SocialFacebook';
import SocialFacebookThin from './SocialFacebookThin';
import SocialTwitter from './SocialTwitter';
import SocialLinkedin from './SocialLinkedin';
import SocialPinterest from './SocialPinterest';
import SocialLink from './SocialLink';
import SettingsBlock from './SettingsBlock';
import SettingsList from './SettingsList';
import ColorWaze from './ColorWaze';
import ColorMaps from './ColorMaps';

export default function Icon({ name, color, size }) {
  switch (name) {
    case 'logo-flying-p':
      return <LogoFlyingP name color={color} size={size} />;
    case 'social-like-heavymetal':
      return <SocialLikeHeavyMetal name color={color} size={size} />;
    case 'social-contact':
      return <SocialContact name color={color} size={size} />;
    case 'social-youtube':
      return <SocialYouTube name color={color} size={size} />;
    case 'social-instagram':
      return <SocialInstagram name color={color} size={size} />;
    case 'social-facebook':
      return <SocialFacebook name color={color} size={size} />;
    case 'social-facebook-thin':
      return <SocialFacebookThin name color={color} size={size} />;
    case 'social-twitter':
      return <SocialTwitter name color={color} size={size} />;
    case 'social-linkedin':
      return <SocialLinkedin name color={color} size={size} />;
    case 'social-pinterest':
      return <SocialPinterest name color={color} size={size} />;
    case 'social-link':
      return <SocialLink name color={color} size={size} />;
    case 'settings-block':
      return <SettingsBlock name color={color} size={size} />;
    case 'settings-list':
      return <SettingsList name color={color} size={size} />;
    case 'color-waze':
      return <ColorWaze name color={color} size={size} />;
    case 'color-maps':
      return <ColorMaps name color={color} size={size} />;
    default:
  }
}
