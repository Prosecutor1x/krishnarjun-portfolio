import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Full-Stack Development',
      'Machine Learning',
      'Web Application Development',
      'REST API Design',
      'Cloud Computing',
      'Data Analytics',
      'ERP Systems',
      'UI/UX Design',
      'CI/CD & DevOps',
      'TensorFlow & PyTorch',
      'Firebase & Firestore',
      'Next.js & React.js',
      'Docker & Kubernetes',
    ],
  },
  img:  '/krishnarjun-nanda.png',
};
