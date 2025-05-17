import { getId } from '@/lib/utils/helper';

export const skillsSection = {
  title: 'What I Do',
  skills: [
    {
      id: getId(),
      title: 'Full-Stack Development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building full-stack web applications using Next.js, TypeScript, TailwindCSS, Prisma, and ShadCN.',
        'Developing scalable, high-performance enterprise applications.',
        'Creating RESTful APIs and integrating complex backends with front-end systems.',
        'Implementing authentication, authorization, and state management using Firebase and Redux.',
      ],
      softwareSkills: [
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'typeScript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'prisma', icon: 'vscode-icons:file-type-prisma' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'firebase', icon: 'logos:firebase' },
        { name: 'docker', icon: 'logos:docker-icon' },
      ],
    },
    {
      id: getId(),
      title: 'Machine Learning & AI',
      lottie: {
        light: '/lotties/coding.json',
        dark: '/lotties/coding-dark.json',
      },
      points: [
        'Building machine learning models for real-time predictions and data analysis.',
        'Developing ETL pipelines for data preprocessing and feature engineering.',
        'Integrating ML models with web applications using Flask and TensorFlow.',
      ],
      softwareSkills: [
        { name: 'python', icon: 'logos:python' },
        { name: 'tensorflow', icon: 'logos:tensorflow' },
        { name: 'pandas', icon: 'logos:pandas' },
        { name: 'numpy', icon: 'logos:numpy' },
        { name: 'docker', icon: 'logos:docker-icon' },
        { name: 'flask', icon: 'logos:flask' },
      ],
    },
    {
      id: getId(),
      title: 'ERP and Software Development',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Designing and building ERP systems for streamlined business operations.',
        'Developing enterprise-grade software solutions with custom authentication and user management.',
        'Integrating third-party services like Google Calendar for automation and scheduling.',
        'Optimizing data workflows and implementing role-based access controls.',
      ],
      softwareSkills: [
        { name: 'firebase', icon: 'logos:firebase' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'docker', icon: 'logos:docker-icon' },
        { name: 'typescript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'mysql', icon: 'vscode-icons:file-type-sql' },
        { name: 'postgresql', icon: 'logos:postgresql' },
      ],
    },
  ],
};
