'use client';
import { getId } from '@/lib/utils/helper';
import { Wrapper, Link, ListItem, AuthorImage } from '@/components';
import { useEffect, useState } from 'react';
import { aboutSection } from '@/lib/content/about';
const About = () => {
 

  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" className="space-y-8">
      <h2 className="heading-secondary">{aboutSection.title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            I’m a software developer focused on backend engineering. At LTIMindtree, I build secure REST APIs and backend services with ASP.NET Core, Entity Framework Core, and SQL Server.
          </p>
          <p>
            My earlier experience includes building a metal price prediction platform at <Link href="https://www.exideindustries.com/" target="_blank" className="text-accent">Exide Industries</Link> and developing web3 product features at <Link href="https://www.chainrisk.cloud/" target="_blank" className="text-accent">Chainrisk</Link>. I’ve also built projects in civic technology, legal case management, and plant disease classification.
          </p>
          <p>
            I work across API design, authentication, real-time features, testing, and CI/CD, with a background in frontend development and machine learning.
          </p>
          <p>{aboutSection.list.title}</p>
          <ul className="grid w-full grid-cols-2 gap-1 text-sm">
            {aboutSection.list.items.map((skill) => (
              <ListItem key={getId()}>{skill}</ListItem>
            ))}
          </ul>
        </div>
        <AuthorImage src={aboutSection.img} alt="Krishnarjun Nanda" />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
