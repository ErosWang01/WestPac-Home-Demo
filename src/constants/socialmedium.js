import FacebookIcon from '../assets/facebook.png';
import TwitterIcon from '../assets/twitter.png';
import YoutubeIcon from '../assets/youtube.png';
import LinkedinIcon from '..//assets/linkedin.png';
import InstaIcon from '../assets/instagram.png';

export const SOCIAL = {
    LINKEDIN: 'linkedin',
    YOUTUBE: 'youtube',
    FACEBOOK: 'facebook',
    INSTAGRAM: 'instagram',
    TWITTER: 'twitter'
}

export const SocialList = [
    {
        key: SOCIAL.FACEBOOK,
        item: <img src = {FacebookIcon} alt="facebook icon"/>
    },
    {
        key: SOCIAL.TWITTER,
        item: <img src = {TwitterIcon} alt="twitter icon"/>
    },
    {
        key: SOCIAL.YOUTUBE,
        item: <img src = {YoutubeIcon} alt="youtube icon"/>
    },
    {
        key: SOCIAL.LINKEDIN,
        item: <img src = {LinkedinIcon} alt="linkedin icon"/>
    },
    {
        key: SOCIAL.INSTAGRAM,
        item: <img src = {InstaIcon} alt="instagram icon"/>
    },
]