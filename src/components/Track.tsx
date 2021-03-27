import Icon from "./Icon";
import { faMinus, faTrain } from "@fortawesome/free-solid-svg-icons";

interface Props {
  readonly color: "black" | "blue" | "green" | "red" | "yellow";
  readonly size: number;
  readonly quantity: number;
  readonly onUp: () => void;
  readonly onDown: () => void;
}

const styles: Record<Props["color"], string> = {
  black: "bg-gray-500 group-hover:bg-gray-700",
  blue: "bg-blue-500 group-hover:bg-blue-700",
  green: "bg-green-500 group-hover:bg-green-700",
  red: "bg-red-500 group-hover:bg-red-700",
  yellow: "bg-yellow-500 group-hover:bg-yellow-700",
};

const Track: React.FC<Props> = ({ color, quantity, size, onUp, onDown }) => {
  const disabledClass = quantity === 0 ? "text-gray-100"  : "text-gray-500";
  return (
    <div className={`flex flex-row justify-center`}>
      <button onClick={onDown} className={`${disabledClass} w-8`}>
        <Icon icon={faMinus} />
      </button>
      <div onClick={onUp}
        className={`flex flex-row items-center text-center whitespace-nowrap group`}
      >
        <div className={`bg-gray-100 group-hover:bg-gray-300 rounded-l px-4 py-2 cursor-pointer shadow`}>{quantity}</div>
        <div className={`${styles[color]} rounded-r text-center text-gray-50 whitespace-nowrap px-4 py-2 cursor-pointer	shadow`}>
          {size} <Icon icon={faTrain} />
        </div>
      </div>
    </div>
  );
};

export default Track;
