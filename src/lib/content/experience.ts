import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: 'Professional Experience',
  experiences: [
    {
      company: 'LTIMindtree',
      companyUrl: 'https://www.ltimindtree.com/',
      role: 'Software Developer (Backend - .NET)',
      started: 'Sep 2025',
      upto: 'present',
      tasks: [
        'Built scalable ASP.NET Core REST APIs with secure JWT-based authentication and authorization.',
        'Optimized SQL Server and Entity Framework queries and debugged performance bottlenecks.',
        'Integrated backend services with an Angular frontend and enabled real-time features using SignalR.',
        'Contributed to CI/CD pipelines, unit testing, test automation, and peer code reviews in an Agile team.',
        'Resolved production issues and applied software engineering and SDLC practices to maintain system stability.',
      ],
    },
    {
      company: 'Exide Industries Limited',
      companyUrl: 'https://www.exideindustries.com/',
      role: 'Software Engineering Intern',
      started: 'Jun 2024',
      upto: 'Aug 2024',
      tasks: [
        'Developed a lead and zinc price prediction website using Next.js, TypeScript, Tailwind CSS, LSTM, TensorFlow, Flask, and Docker.',
        'Created a responsive front-end with Next.js and TypeScript for real-time data visualization.',
        'Built a Flask-based back-end server integrating machine learning models for accurate price predictions.',
        'Optimized data pipelines using PandaSQL for efficient data processing.',
      ],
    },
    {
      company: 'Chainrisk (Prev: UNSNARL)',
      companyUrl: 'https://www.chainrisk.cloud/',
      role: 'Full-Stack Developer',
      started: 'Nov 2022',
      upto: 'Sep 2023',
      tasks: [
        'Led the development of Detectbox, the company’s MVP, from concept to launch.',
        'Integrated Firebase for authentication and Firestore for real-time database operations.',
        'Built REST APIs using Firebase Cloud Functions for seamless client-server communication.',
        'Optimized database queries to improve app performance and scalability.',
      ],
    },
  ],
};
