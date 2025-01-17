import { ICONS } from '../constants';

const getIcon = (name) => {
  let icon;

  switch (name) {
    case 'twitter':
      icon = ICONS.TWITTER;
      break;
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'vkontakte':
      icon = ICONS.VKONTAKTE;
      break;
    case 'telegram':
      icon = ICONS.TELEGRAM;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    case 'rss':
      icon = ICONS.RSS;
      break;
    case 'facebook':
      icon = ICONS.FACEBOOK;
      break;
    case 'youtube':
      icon = ICONS.YOUTUBE;
      break;
    case 'instagram':
      icon = ICONS.INSTAGRAM;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
