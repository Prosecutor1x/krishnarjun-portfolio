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
            Hi, my name is Krishnarjun Nanda. I'm a passionate full-stack web developer with a strong foundation in Machine Learning and ERP systems. I have hands-on experience building enterprise-grade applications and AI-driven platforms.
          </p>
          <p>
            I've worked with companies like <Link href="https://www.exideindustries.com/" target="_blank" className="text-accent">Exide Industries</Link>, <Link href="https://www.chainrisk.cloud/" target="_blank" className="text-accent">Chainrisk</Link>, and <Link href="https://erp.lawspicious.com/" target="_blank" className="text-accent">Lawspicious</Link>, where I developed scalable software solutions, integrated machine learning models, and optimized complex data workflows.
          </p>
          <p>
            My focus now is on building intelligent, user-centric web applications and expanding my expertise in AI and cloud-native architectures.
          </p>
          <p>Skills:</p>
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
