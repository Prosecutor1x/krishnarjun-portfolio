import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Krishnarjun Nanda.',
  tagline: 'Software Developer | Backend & .NET',
  description:
    'Backend-focused software developer at LTIMindtree, building secure ASP.NET Core APIs and SQL Server-backed services. Experienced with Angular and Next.js applications, real-time systems, cloud deployments, and machine learning projects.',
  specialText: 'Currently working at LTIMindtree',
  cta: {
    title: 'See my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

