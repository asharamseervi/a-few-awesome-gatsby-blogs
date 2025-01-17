const getContactHref = (name, contact) => {
  let href;

  switch (name) {
    case 'twitter':
      href = `https://www.twitter.com/${contact}`;
      break;
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'vkontakte':
      href = `https://vk.com/${contact}`;
      break;
    case 'telegram':
      href = `telegram:${contact}`;
      break;
    case 'email':
      href = `mailto:${contact}`;
      break;
    case 'facebook':
      href = href = `https://www.facebook.com/${contact}`;
      break;
    case 'youtube':
      href = href = `https://www.youtube.com/channel/${contact}`;
      break;
    case 'instagram':
      href = href = `https://www.instagram.com/${contact}`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
