import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'professional summary',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Core technologies and areas of focus:',
    items: [
      'C# and ASP.NET Core',
      'REST APIs, JWT, and RBAC',
      'Entity Framework Core',
      'SQL Server and MongoDB',
      'Angular, React, and Next.js',
      'Python and machine learning',
      'Firebase and Firestore',
      'Go and API development',
      'Azure and AWS S3',
      'Docker and CI/CD',
      'SignalR and real-time systems',
      'Testing and debugging',
    ],
  },
  img:  '/krishnarjun-nanda.png',
};
