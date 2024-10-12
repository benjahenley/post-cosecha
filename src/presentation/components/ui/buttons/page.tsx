import { RightArrow } from "@/assets/svg";
import { BodyBold } from "../texts/page";
import { forwardRef } from "react";

type ButtonProps = {
  className: string;
  children: any;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: any;
};

export function PinkButton({
  className,
  children,
  type,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} button pink-button`}
      type={type}>
      {children}
    </button>
  );
}

export function RedButton({ className, children, type, href }: any) {
  return (
    <button
      className={`${className} p-[0.3rem] w-full max-w-[18rem] lg:max-w-[20rem] rounded-full text-white uppercase font-bold bg-primary flex items-center justify-center overflow-hidden relative group`}
      type={type}>
      <a
        href={href}
        className="inline-block transform transition-transform duration-300 group-hover:-translate-x-2">
        <BodyBold>{children}</BodyBold>
      </a>
      <RightArrow className="w-3 h-3 ml-2 opacity-0 text-white font-extrabold transform transition-all duration-300 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100" />
    </button>
  );
}

export function ColoredButton({ className, children, type, bg, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`${className} p-[0.5rem] w-full max-w-[15rem] lg:max-w-[18rem] rounded-full text-white text-md hover:transform hover:scale-105 uppercase bg-primary font-bold flex items-center justify-center overflow-hidden relative group`}
      // style={{ backgroundColor: bg }}
      type={type}>
      <BodyBold>{children}</BodyBold>
    </button>
  );
}
export const RedButtonComplement = forwardRef(
  (
    { className = "", children, href, ...props }: any,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        className={`${className} text-primary w-full text-md lg:text-lg uppercase font-bold overflow-hidden relative group`}
        type="button"
        {...props}>
        <a
          href={href}
          className="inline-block transform transition-transform duration-300 group-hover:-translate-x-2 group-hover:underline">
          {children}
        </a>
        <RightArrow className="hidden w-3 h-3 ml-2 opacity-0 text-primary font-extrabold transform transition-[opacity,translate] duration-500 -translate-x-2 group-hover:translate-x-0 group-hover:inline group-hover:opacity-100" />
      </button>
    );
  }
);
RedButtonComplement.displayName = "RedButtonComplement";

export function BlueButtonAnimated({ className, children, type }: any) {
  return (
    <button
      className={`${className} p-2 w-full max-w-xs rounded-full text-white text-md uppercase font-bold bg-secondary transition-all duration-500 hover:pr-10 flex items-center justify-center`}
      type={type}>
      <span className="relative transition-all duration-500">
        <BodyBold>{children}</BodyBold>
        <span className="absolute opacity-0 text-black right-[-1.25rem] transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:right-0">
          &raquo;
        </span>
        <span className="absolute opacity-0 right-[-1.25rem] transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:right-0">
          &raquo;
        </span>
      </span>
    </button>
  );
}

export function YellowButton({ className, children, type }: any) {
  return (
    <button className={`${className} button yellow-button`} type={type}>
      {children}
    </button>
  );
}
