import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/ButtonLink';

interface NextPreviousArticle {
  href: string;
  text: string;
}

interface NextPreviousArticleProps {
  previousArticle?: NextPreviousArticle;
  nextArticle?: NextPreviousArticle;
}

export const NextPreviousArticle: React.FC<NextPreviousArticleProps> = ({ previousArticle, nextArticle }) => {
  return (
    <div className="w-full h-auto px-2 xs:px-4 max-w-screen-2xl mx-auto">
      <div className="w-full px-2 xs:px-4 py-2 xs:py-4 bg-cardGrad dark:bg-cardGradDark flex justify-between items-center my-2 xs:my-4 rounded-4xl md:rounded-5xl xl:rounded-6xl">
        {previousArticle ? (
          <motion.div
            className="relative z-10 flex justify-start w-auto rounded-full max-w-[140px]"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 1.5 }}
            whileHover={{ scale: 0.98, y: 0, transition: { type: "spring", stiffness: 400, duration: 0.2 }, }}
            whileTap={{ scale: 0.95, y: 0, transition: { type: "spring", stiffness: 400, duration: 0.2 }, }}
          >
            <ButtonLink variant="secondary" href={previousArticle.href} className="w-[140px] text-blurple-900">
              ← {previousArticle.text}
            </ButtonLink>
          </motion.div>
        ) : (
          <div className="w-[140px]"></div>
        )}
        {nextArticle ? (
          <motion.div
            className="relative z-10 flex justify-end w-auto rounded-full max-w-[140px]"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 1.5 }}
            whileHover={{ scale: 0.98, y: 0, transition: { type: "spring", stiffness: 400, duration: 0.2 }, }}
            whileTap={{ scale: 0.95, y: 0, transition: { type: "spring", stiffness: 400, duration: 0.2 }, }}
          >
            <ButtonLink variant="primary" href={nextArticle.href} className="w-[140px]">
            {nextArticle.text} →
            </ButtonLink>
          </motion.div>
        ) : (
          <div className="w-[140px]"></div>
        )}
      </div>
    </div>
  );
};