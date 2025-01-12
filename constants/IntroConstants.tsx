import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export const NAME = 'Sanjida Nasrin';

export const INTRO_HEADING = 'Intro';

export const ABOUT_ME =
  '<p>Hello, I am passionate <em><b>software Developer and problem solver</b></em>.</p>';

export const ICON_SIZE = 22;

export const SOCIAL_PROFILES = [
  {
    link: 'https://twitter.com/sntanju07',
    title: 'Twitter',
    icon: <FaTwitter color="#1DA1F2" size={ICON_SIZE} />,
  },
  {
    link: 'https://github.com/sntanju',
    title: 'Github',
    icon: <FaGithub color="" size={ICON_SIZE} />,
  },
  {
    link: 'https://www.linkedin.com/in/sntanju07/',
    title: 'LinkedIn',
    icon: <FaLinkedin color="#0077B5" size={ICON_SIZE} />,
  },
  {
    link: 'https://stackoverflow.com/users/19215771/sntanju07',
    title: 'Stackoverflow',
    icon: <FaStackOverflow color="#EF8236" size={ICON_SIZE} />,
  },
  {
    link: 'mailto:sntanju07@gmail.com',
    title: 'Gmail',
    icon: <IoIosMail color="#D44638" size={ICON_SIZE} />,
  },
];
