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
  black: "bg-gray-500 hover:bg-gray-700",
  blue: "bg-blue-500 hover:bg-blue-700",
  green: "bg-green-500 hover:bg-green-700",
  red: "bg-red-500 hover:bg-red-700",
  yellow: "bg-yellow-500 hover:bg-yellow-700",
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
      <button
        {...touchProps}
        className={`${styles[color]} rounded flex flex-row px-4 py-2 text-center text-gray-50 whitespace-nowrap`}
      >
        {quantity} x {size} <Cog />
      </button>
    </>
  );
};

export default Track;
