import BurguerSVG from "./burguer.svg";
import InstagramSVG from "./instagram.svg";
import CrossSVG from "./cross.svg";
import LogoSVG from "./logo.svg";
import ProfileSVG from "./profile.svg";
import SearchSVG from "./search.svg";
import DaySVG from "./day.svg";
import NightSVG from "./night.svg";
import CartSVG from "./cart.svg";
import RightSVG from "./rightArrow.svg";

export function BurguerIcon(props: any): any {
  return (
    <BurguerSVG
      role="button"
      className={props.className}
      onClick={props.onClick}
      alt="file"
    />
  );
}

export function CartImg(props: any): any {
  return <CartSVG className={props.className}></CartSVG>;
}

export function ProfileIcon(props: any): any {
  return <ProfileSVG className={props.className} onClick={props.onClick} />;
}

export function SearchImg(props: any): any {
  return (
    <SearchSVG className={props.className} color={props.color}></SearchSVG>
  );
}

export function CrossImg(props: any): any {
  return (
    <CrossSVG
      role="button"
      className={props.className}
      onClick={props.onClick}></CrossSVG>
  );
}

export function DayImg(props: any): any {
  return <DaySVG className={props.className} onClick={props.onClick}></DaySVG>;
}

export function NightImg(props: any): any {
  return (
    <NightSVG className={props.className} onClick={props.onClick}></NightSVG>
  );
}

export function LogoImg(props: any): any {
  return <LogoSVG role="button" className={props.className}></LogoSVG>;
}

export function RightArrow(props: any): any {
  return <RightSVG role="button" className={props.className}></RightSVG>;
}
