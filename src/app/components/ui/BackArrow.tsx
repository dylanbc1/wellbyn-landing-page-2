'use client';

import React from 'react';
import Link from 'next/link';

interface BackArrowProps {
  href: string;
  text: string;
  className?: string;
}

const BackArrow: React.FC<BackArrowProps> = ({
  href,
  text,
  className = ''
}) => {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#5FA9DF] transition-colors ${className}`}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      {text}
    </Link>
  );
};

export default BackArrow;
