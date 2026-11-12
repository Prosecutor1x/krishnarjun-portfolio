import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: 'selected projects',
  projects: [
    {
      id: getId(),
      name: 'Lawboard - Law Firm ERP',
      description: 'A case and client management ERP built for law firms.',
      tasks:
        'Managed 500+ legal cases with multi-role workflows and activity tracking, Designed a Firestore data model with audit logging, Automated updates and notifications with Google Cloud Functions',
      url: 'https://github.com/Prosecutor1x/Lawboard',
      repo: 'https://github.com/Prosecutor1x/Lawboard',
      img: 'https://images.unsplash.com/photo-1767972463877-b64ba4283cd0?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200',
      imageCredit: 'Photo by Sasun Bughdaryan on Unsplash',
      imageSource: 'https://unsplash.com/photos/wooden-gavel-resting-on-a-dark-surface-next-to-book-FaTLrG5-ViE',
      tags: ['Next.js', 'Firebase', 'Cloud Functions'],
    },
    {
      id: getId(),
      name: 'Agro-Scans - Plant Disease Classification',
      description: 'An AI-assisted plant disease classification and diagnosis project.',
      tasks:
        'Trained a VGG-based model on 10,000+ images, Deployed real-time inference with Next.js and Flask, Generated diagnostic reports with a small LLaMA model',
      url: 'https://github.com/Prosecutor1x/Agro-Scans',
      repo: 'https://github.com/Prosecutor1x/Agro-Scans',
      img: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Kohlrabi_Alternaria_Befall-2-DLR-NW-jk.jpg',
      imageCredit: 'Photo by Jochen Kreiselmaier (CC BY-SA 4.0)',
      imageSource: 'https://commons.wikimedia.org/wiki/File:Kohlrabi_Alternaria_Befall-2-DLR-NW-jk.jpg',
      tags: ['Python', 'Flask', 'VGG16', 'PostgreSQL', 'Docker'],
    },
    {
      id: getId(),
      name: 'Bongobashi - Citizen Connect Portal',
      description: 'A portal for reporting local issues and tracking their progress.',
      tasks:
        'Built REST APIs for complaint tracking and status changes, Added AWS S3 storage for submitted documents, Developed the citizen facing portal with Next.js',
      url: 'https://github.com/Prosecutor1x/citizen-connect-frontend',
      frontendRepo: 'https://github.com/Prosecutor1x/citizen-connect-frontend',
      backendRepo: 'https://github.com/Prosecutor1x/citizen-connect-backend',
      img: '/projects/bongobashi-home.png',
      tags: ['Next.js', 'Go', 'MongoDB', 'AWS S3'],
    },
    {
      id: getId(),
      name: 'GetLifeGuard',
      description: 'An E-Commerce platform for Self-Defense Keychain.',
      tasks:
        "As a freelancer, I understood the client's requirements and executed a plan to develop and design an e-commerce platform, including the frontend UI, backend setup with database, APIs, and integration with payment platforms.",
      url: 'https://life-kit.vercel.app/',
      img: 'https://life-kit.vercel.app/images/og.png',
      tags: [
        'NextJs 14',
        'TypeScript',
        'TailwindCSS',
        'ShadCN',
        'Prisma',
        'Stripe',
      ],
    },
    {
      id: getId(),
      name: 'Valuemetrix',
      description: 'An AI Powered Investment Platform.',
      tasks:
        'I strategically planned project milestones, led a cross-functional team, established a design system, developed the website, and integrated Stripe payments with secure authentication.',
      url: 'https://www.valuemetrix.io/',
      img: 'https://www.valuemetrix.io/images/og.png',
      tags: ['AI/ML', 'NextJs', 'TypeScript', 'TailwindCSS', 'Prisma'],
    },
    {
      id: getId(),
      name: 'Velvi Matrimony',
      description:
        'A platform that redefines the way individuals find their life partners.',
      tasks:
        'As a freelancer, I developed this project by planning, communicating with the client, gathering feedback, implementing UI & pages, and integrating real-time data fetching with filtering functionality.',
      url: 'https://velvi.vercel.app/',
      img: 'https://i.postimg.cc/tRS4GvzJ/Screenshot-2024-02-27-at-5-48-49-PM.png',
      tags: ['NextJs', 'TypeScript', 'TailwindCSS', 'APIs'],
    },
    /*   {
      id: getId(),
      name: 'Integra',
      description: 'An AI-Powered Leads Generation Platform.',
      tasks:
        'I strategically planned project milestones, led a cross-functional team, established a design system, developed the website, and integrated Stripe payments with secure authentication.',
      url: 'https://www.integraleads.xyz/',
      img: 'https://user-images.githubusercontent.com/68834718/279476369-2f69466a-71db-4da0-9afd-04f8f0efb621.jpeg',
      tags: ['AI/ML', 'NextJs', 'TypeScript', 'TailwindCSS', 'Express'],
    }, */

    {
      id: getId(),
      name: 'Drafton',
      description: 'The AI-powered platform that simplifies proposal creation.',
      tasks:
        'I designed and developed the landing page and implemented the dashboard by creating a user interface and integrating APIs.',
      url: 'https://www.drafton.io/',
      img: 'https://i.postimg.cc/4N6dsGcm/Screenshot-2024-06-17-at-11-05-22-PM.png',
      tags: ['Open AI', 'NextJs', 'TypeScript', 'TailwindCSS', 'Prisma'],
    },
  ],
};

export default featuredProjectsSection;
