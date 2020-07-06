export const linkFormatter = (i) => {
  let src;
  switch (i.label) {
    case 'vk':
      src = 'logo-vk.png'
      break;

    case 'telegram':
      src = 'logo-telegram.png'
      break;

    case 'youtube':
      src = 'logo-youtube.png'
      break;

    case 'twitter':
      src = 'logo-twitter.png'
      break;

    case 'twitch':
      src = 'logo-twitch.png'
      break;

    default:
      src = 'logo-web.png'
      break;
  }
  return src;
}