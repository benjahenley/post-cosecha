import BurguerSVG from "./burguer.svg";
import CrossSVG from "./cross.svg";
import LogoSVG from "./logo.svg";
import ProfileSVG from "./profile.svg";
import SearchSVG from "./search.svg";
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

export function LogoImg(props: any): any {
  return <LogoSVG role="button" className={props.className}></LogoSVG>;
}

export function RightArrow(props: any): any {
  return <RightSVG role="button" className={props.className}></RightSVG>;
}
