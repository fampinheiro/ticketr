import * as z from "zod";
import { faMinus, faTrain } from "@fortawesome/free-solid-svg-icons";
import * as constants from "../constants";
import Icon from "./Icon";
import Color from "./Color";

interface Props {
  readonly color: z.infer<typeof constants.Color>;
  readonly size: z.infer<typeof constants.Segment>;
  readonly quantity: number;
  readonly onUp: () => void;
  readonly onDown: () => void;
}
const Segment: React.FC<Props> = ({ color, quantity, size, onUp, onDown }) => {
  const disabledClass = quantity === 0 ? "text-gray-100" : "text-gray-500";
  return (
    <div className={`flex flex-row justify-center`}>
      <button onClick={onDown} className={`${disabledClass} px-2`}>
        <Icon icon={faMinus} />
      </button>
      <div
        onClick={onUp}
        className={`flex flex-row items-center text-center whitespace-nowrap group`}
      >
        <Color
          color={color}
          className={`rounded-l text-center text-gray-50 whitespace-nowrap px-2 py-2 cursor-pointer	shadow`}
        >
          {quantity}
        </Color>
        <div
          className={`bg-gray-100 group-hover:bg-gray-300 rounded-r px-4 py-2 cursor-pointer shadow`}
        >
          {size} <Icon icon={faTrain} />
        </div>
      </div>
    </div>
  );
};

export default Segment;
