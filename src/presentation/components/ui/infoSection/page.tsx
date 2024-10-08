"use client";
import { useState, useRef, useEffect } from "react";
import { SectionSubTitle, SectionTitle } from "../texts/page";

type Props = {
  title: string;
  subtitle: string;
  style?: any;
};

const InfoSection = ({ title, subtitle, style }: Props) => {
  const [isSubTitleVisible, setIsSubTitleVisible] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  const subTitleRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === subTitleRef.current) {
              setIsSubTitleVisible(true);
            } else if (entry.target === titleRef.current) {
              setIsTitleVisible(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (subTitleRef.current) observer.observe(subTitleRef.current);
    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (subTitleRef.current) observer.unobserve(subTitleRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center mb-5 xl:mb-10" style={style}>
      <SectionSubTitle
        ref={subTitleRef}
        className={`mb-2 lg:mb-5 ${
          isSubTitleVisible ? "animate-fadeLeft" : "opacity-0"
        }`}>
        {subtitle}
      </SectionSubTitle>

      <SectionTitle
        ref={titleRef}
        className={`${
          isTitleVisible ? "animate-fadeRight" : "opacity-0"
        } text-center`}>
        {title}
      </SectionTitle>

      <img
        src="/img/text-decor/wing.png"
        className={`${isTitleVisible ? "animate-fadeIn" : "opacity-0"} h-20`}
      />
    </div>
  );
};

export default InfoSection;
