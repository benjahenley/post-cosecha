import { LargeText, Subtitle } from "@/presentation/components/ui/texts/page";

interface ItemProps {
  className?: string;
  title: string;
  price: string | number;
  url: string;
}

export default function Item(props: ItemProps) {
  return (
    <div className="card">
      <img
        alt={props.title}
        src={props.url}
        className="watch h-100 w-100"></img>
      <div className="textGroup">
        <LargeText>{props.title}</LargeText>
        <Subtitle>${props.price}</Subtitle>
      </div>
    </div>
  );
}
