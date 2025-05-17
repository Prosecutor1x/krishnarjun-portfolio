import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "Where I've Worked",
  experiences: [
    {
      company: 'Lawspicious',
      companyUrl: 'https://erp.lawspicious.com/',
      role: 'Full-Stack Developer',
      started: 'Sep 2024',
      upto: 'Jan 2024',
      tasks: [
        'Developed a comprehensive ERP system for law firms with Next.js, Firebase, and TailwindCSS.',
        'Implemented custom Firebase claims for role-based access control and user management.',
        'Integrated Google Calendar and Google Cloud Functions for scheduling and automated email notifications.',
        'Built dynamic data visualizations with Chart.js for case management insights.',
      ],
    },
    {
      company: 'Exide Industries Limited',
      companyUrl: 'https://www.exideindustries.com/',
      role: 'Intern - Price Prediction Website',
      started: 'June 2024',
      upto: 'August 2024',
      tasks: [
        'Developed a lead and zinc price prediction website using Next.js, TypeScript, Tailwind CSS, LSTM, TensorFlow, Flask, and Docker.',
        'Created a responsive front-end with Next.js and TypeScript for real-time data visualization.',
        'Built a Flask-based back-end server integrating machine learning models for accurate price predictions.',
        'Optimized data pipelines using PandaSQL for efficient data processing.',
      ],
    },
    {
      company: 'Black Bird Robotix',
      companyUrl: 'https://github.com/Prosecutor1x',
      role: 'Full-Stack Developer',
      started: 'Jan 2024',
      upto: 'March 2024',
      tasks: [
        'Built multiple web applications using React, Next.js, and TypeScript.',
        'Integrated machine learning models for real-time data analysis and predictions.',
        'Developed scalable APIs and optimized front-end performance for smooth user experience.',
      ],
    },
    {
      company: 'Chainrisk (Prev: UNSNARL)',
      companyUrl: 'https://www.chainrisk.cloud/',
      role: 'Full-Stack Developer',
      started: 'November 2022',
      upto: 'September 2023',
      tasks: [
        'Led the development of Detectbox, the company’s MVP, from concept to launch.',
        'Integrated Firebase for authentication and Firestore for real-time database operations.',
        'Built REST APIs using Firebase Cloud Functions for seamless client-server communication.',
        'Optimized database queries to improve app performance and scalability.',
      ],
    },
  
 
  ],
};