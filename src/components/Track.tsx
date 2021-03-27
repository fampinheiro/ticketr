import Truck from "../icons/Truck";
import Cog from "../icons/Truck";
interface Props {
  readonly color: "black" | "blue" | "green" | "red" | "yellow";
  readonly size: number;
  readonly quantity: number;
  readonly onUp: () => void;
  readonly onDown: () => void;
}

const styles: Record<Props["color"], string> = {
  black: "bg-gray-500 hover:bg-gray-700",
  blue: "bg-blue-500 hover:bg-blue-700",
  green: "bg-green-500 hover:bg-green-700",
  red: "bg-red-500 hover:bg-red-700",
  yellow: "bg-yellow-500 hover:bg-yellow-700",
};

const Track: React.FC<Props> = ({ color, quantity, size, onUp, onDown }) => {
  return (
    <div className={`flex flex-row space-between`}>
      <button onClick={onDown} className={`w-8`}>
        -
      </button>
      <p
        className={`${styles[color]} rounded flex flex-row px-4 py-2 text-center text-gray-50 whitespace-nowrap`}
      >
        {quantity} x {size} <Truck />
      </p>
      <button onClick={onUp} className={`w-8`}>
        +
      </button>
    </div>
  );
};

export default Track;
