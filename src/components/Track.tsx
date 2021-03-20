import Cog from "../icons/Cog";
import useTouchEvents from "./hooks/useTouchEvents";

interface Props {
  readonly color: "black" | "blue" | "green" | "red" | "yellow";
  readonly size: number;
  readonly quantity: number;
  readonly onClick: () => void;
  readonly onLongPress: () => void;
}

const styles: Record<Props["color"], string> = {
  black: "bg-black-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
};

const Track: React.FC<Props> = ({
  color,
  quantity,
  size,
  onClick,
  onLongPress,
}) => {
  const touchProps = useTouchEvents({
    onClick: () => onClick(),
    onLongClick: () => onLongPress(),
  });

  return (
    <>
      {quantity}
      <button
        {...touchProps}
        className={`${styles[color]} flex flex-row px-2 py-1`}
      >
        {size} <Cog />
      </button>
    </>
  );
};

export default Track;
