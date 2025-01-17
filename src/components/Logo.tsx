import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="relative w-32 h-12">
      <Image
        src="/images/Vox-AI-Logo.png.webp"
        alt="VOC AI Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};

export default Logo;
