import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ansh Rastogi|portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1m2SMY5FUnykNikm_Z6ufEL10PJUWdO5b/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pp.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
 
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'https://in.linkedin.com/public-profile/in/ansh-rastogi-3a62791a1',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://instagram.com/i_m_anshrastogi?igshid=q7tz03hh7qg0',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/anshrastogi.01.cool',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://in.linkedin.com/public-profile/in/ansh-rastogi-3a62791a1',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/anshrastogi08?lang=en',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/anshrastogi240901',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
