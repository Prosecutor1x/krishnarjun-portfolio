import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Krishnarjun Nanda.',
  tagline: 'Building Intelligent Web Experiences.',
  description:
    "I'm a passionate Full-Stack web developer with a strong foundation in Machine Learning and hands-on experience in building web applications using React.js, Next.js, TypeScript, TailwindCSS, and Prisma, with a focus on UI/UX design and AI-driven solutions.",
  specialText: 'Currently available for freelance',
  cta: {
    title: 'See my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

