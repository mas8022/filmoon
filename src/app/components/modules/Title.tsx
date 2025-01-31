import React, { memo } from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = memo(({ title }) => {
  return (
    <div className="w-full border-b-2 border-b-second/50 font-bold text-[2rem] sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.6rem] pb-8 tracking-tight mb-6">
      {title}
    </div>
  );
});

export default Title;
