import { forwardRef } from "react";

type Props = {
  children: any;
  className?: string;
  onClick?: () => void;
  scrolled?: boolean;
  href?: string;
  color?: string;
  ref?: string;
  style?: any;
};

function Title({ children, className = "" }: Props) {
  return (
    <h1
      className={`${className} text-white letter-3d text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold`}>
      {children}
    </h1>
  );
}

function TitleWhite({ scrolled = false, children, className = "" }: Props) {
  return (
    <h1
      className={`${className} text-background text-4xl sm:text-5xl md:text-6xl font-thin text-black dark:text:white`}>
      {children}
    </h1>
  );
}

function Subtitle({ children, className = "", color }: Props) {
  return (
    <h2
      className={`${className} text-${color} text-background text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text:white`}>
      {children}
    </h2>
  );
}

const SectionTitle = forwardRef<HTMLHeadingElement, Props>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={`${className} uppercase letter-3d text-4xl lg:text-5xl font-bold text-black`}
        {...props}>
        {children}
      </h2>
    );
  }
);

const SectionSubTitle = forwardRef<HTMLHeadingElement, Props>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={`${className} uppercase tracking-[0.5rem] text-md sm:text-md spacing md:text-md font-normal text-black`}
        {...props}>
        {children}
      </h3>
    );
  }
);

const SectionTitleColoured = forwardRef<HTMLHeadingElement, Props>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <h4
        ref={ref}
        className={`${className} uppercase text-2xl spacing md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-primary`}
        {...props}>
        {children}
      </h4>
    );
  }
);

function LargeText({ children, className = "" }: Props) {
  return (
    <h3
      className={`${className} text-background text-xl sm:text-2xl md:text-3xl font-normal`}>
      {children}
    </h3>
  );
}

function LargeBold({ children, className = "" }: Props) {
  return (
    <h3
      className={`${className} text-background text-xl sm:text-2xl md:text-3xl font-bold`}>
      {children}
    </h3>
  );
}

function BodyTitle({ children, className = "" }: Props) {
  return (
    <h4
      className={`${className} text-background text-base sm:text-lg md:text-xl font-normal`}>
      {children}
    </h4>
  );
}

function BodyBold({ children, className = "" }: Props) {
  return (
    <h4 className={`${className} text-background text-md md:text-lg font-bold`}>
      {children}
    </h4>
  );
}

function ParagraphText({ children, className = "", color }: Props) {
  return (
    <p
      className={`${className} text-${color} text-lg sm:text-lg md:text-xl lg:text-xl xl:text-3xl font-semibold lg:font-medium`}>
      {children}
    </p>
  );
}

const ParagraphSectionText = forwardRef<HTMLParagraphElement, Props>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={`${className} text-base md:text-lg lg:text-xl xl:text- font-normal leading-relaxed`}
        {...props}>
        {children}
      </p>
    );
  }
);

function Text({ children, className = "" }: Props) {
  return (
    <p
      className={`${className} font-sans text-background text-xs sm:text-sm md:text-md font-light`}>
      {children}
    </p>
  );
}

function TextAllwaysBlack({ children, className = "" }: Props) {
  return (
    <p
      className={`${className} font-sans text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-normal`}>
      {children}
    </p>
  );
}

function AnimatedNavItem({
  onClick,
  href,
  children,
  className = "",
  style,
}: Props) {
  return (
    <a
      href={href}
      style={style}
      onClick={onClick}
      className={`${className} animate-fadeInLeftBounce font-sans text-white font-bold leading-none cursor-pointer transition-colors duration-300 text-xl xl:text-2xl relative overflow-hidden hover:text-[#BF0010]`}>
      {children}
    </a>
  );
}

function TextWithLink({ href, children, className = "" }: Props) {
  return (
    <li
      className={`${className} text-white font-bold leading-none cursor-pointer transition-colors duration-300 text-xl sm:text-xl md:text-2xl lg:text-xs relative overflow-hidden`}>
      <a
        href={href}
        className="h-full transition-transform duration-500 hover:animate-move-up-disappear">
        {children}
      </a>
    </li>
  );
}

SectionSubTitle.displayName = "SectionSubTitle";
SectionTitle.displayName = "SectionTitle";
ParagraphSectionText.displayName = "ParagraphSectionText";
SectionTitleColoured.displayName = "SectionTitleColoured";

export {
  Title,
  Text,
  TitleWhite,
  Subtitle,
  LargeText,
  LargeBold,
  BodyTitle,
  BodyBold,
  ParagraphSectionText,
  AnimatedNavItem,
  TextAllwaysBlack,
  SectionTitle,
  SectionSubTitle,
  TextWithLink,
  ParagraphText,
  SectionTitleColoured,
};
