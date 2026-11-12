'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProjectCard = ({
  name,
  url,
  repo,
  frontendRepo,
  backendRepo,
  imageCredit,
  imageSource,
  year,
  img,
  tags,
  ...rest
}: ProjectType & MotionProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div {...rest} className="w-full max-w-[350px]">
      <button
        onClick={(e) => {
          // Don't run this if the clicked target is an anchor element
          if ((e.target as HTMLElement).closest('a')) return;
          window.open(url);
        }}
        className="block w-full overflow-hidden transition-all duration-200 rounded-md shadow-xl group bg-bg-secondary dark:shadow-2xl"
      >
        <div className="relative h-[200px] overflow-hidden">
          <Image
            src={img}
            alt={name}
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={blurImageURL}
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110 group-focus:scale-110"
          />
          {imageCredit && imageSource && (
            <a
              href={imageSource}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1 text-left text-[10px] text-white"
            >
              {imageCredit}
            </a>
          )}
        </div>
        <div className="p-4 py-3 space-y-1">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs capitalize">{tags.join(' | ')}</p>
            <div className="flex items-center space-x-1.5">
              {frontendRepo || backendRepo ? (
                <>
                  {frontendRepo && (
                    <a
                      href={frontendRepo}
                      aria-label={`${name} frontend repository`}
                      className="flex items-center gap-1 text-xs duration-200 hover:text-accent"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon icon="tabler:brand-github" width={18} height={18} />
                      Frontend
                    </a>
                  )}
                  {backendRepo && (
                    <a
                      href={backendRepo}
                      aria-label={`${name} backend repository`}
                      className="flex items-center gap-1 text-xs duration-200 hover:text-accent"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon icon="tabler:brand-github" width={18} height={18} />
                      Backend
                    </a>
                  )}
                </>
              ) : (
                <>
                  {repo && (
                    <a
                      href={repo}
                      aria-label={`${name} source repository`}
                      className="block duration-200 hover:text-accent"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon icon="tabler:brand-github" width={20} height={20} />
                    </a>
                  )}
                  {url !== repo && (
                    <a
                      href={url}
                      aria-label={`${name} project link`}
                      className="block duration-200 hover:text-accent"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon icon="ci:external-link" width={22} height={22} />
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
          <h4 className="flex justify-between font-medium capitalize duration-200 group-hover:text-accent">
            <span>{name}</span>
            <span className="mr-1">{year}</span>
          </h4>
        </div>
      </button>
    </motion.div>
  ) : (
    <></>
  );
};

export default ProjectCard;
