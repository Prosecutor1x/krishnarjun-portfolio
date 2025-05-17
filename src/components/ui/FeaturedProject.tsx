import { FeaturedProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';
import { cn } from '@/lib/utils/helper';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Props extends FeaturedProjectType, MotionProps {
  align?: 'left' | 'right';
}

const FeaturedProject = ({
  img,
  name,
  url,
  repo,
  description,
  tasks = '',
  tags = [],
  align = 'left',
  ...rest
}: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main>
      {/* Desktop Version */}
      {isMounted && (
        <motion.div
          className={cn(
            'relative hidden lg:block min-h-[280px] sm:min-h-[360px] h-full overflow-hidden rounded-lg shadow-lg text-center',
            align === 'left' ? 'lg:text-left' : 'lg:text-right'
          )}
          {...rest}
        >
          <div
            className={cn(
              'w-full lg:max-w-[60%] absolute inset-0 h-full -z-20 rounded overflow-hidden shadow-2xl group',
              align === 'left' ? 'ml-auto' : ''
            )}
          >
            <Image
              src={img}
              alt={name}
              width={720}
              height={480}
              className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={blurImageURL}
            />
            <Link href={url} target="_blank" className="absolute inset-0 z-10 block bg-transparent" />
          </div>

          <div className="lg:max-w-[45%] space-y-5 w-full h-full p-5 lg:p-0 absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 flex flex-col justify-end bg-gradient-to-t from-black/80 group-hover:from-accent">
            <div>
              <div className="font-mono hidden lg:block text-accent capitalize text-xs lg:mb-2.5">
                Featured Project
              </div>
              <h2 className="heading-tertiary !text-white lg:!text-dark-2 !font-semibold lg:!font-normal">
                <a href={url} className="block duration-200 hover:text-accent" target="_blank">
                  {name}
                </a>
              </h2>
            </div>
            <div className="rounded-sm bg-bg-secondary shadow-lg p-5">
              <p className="text-sm text-dark-1">{description}</p>
              {tasks && (
                <div className="font-mono text-xs capitalize text-accent mt-3">
                  Tasks / Achievements
                </div>
              )}
              <ul className="text-base space-y-1">
                {tasks.split(',').map((task, index) => (
                  <li key={index}>{task.trim()}</li>
                ))}
              </ul>
            </div>
            <div className="font-mono text-xs text-accent flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {repo && (
              <div className="flex items-center gap-3 mt-3">
                <a href={repo} className="hover:text-accent" target="_blank">
                  <Icon icon="tabler:brand-github" width={22} height={22} />
                </a>
                <a href={url} className="hover:text-accent" target="_blank">
                  <Icon icon="ci:external-link" width={24} height={24} />
                </a>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </main>
  );
};

export default FeaturedProject;
