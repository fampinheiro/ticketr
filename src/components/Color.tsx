import * as z from "zod";
import { Color } from "../constants";

interface Props {
  readonly color: z.infer<typeof Color>;
  readonly className?: string;
}

const styles: Record<Props["color"], string> = {
  black: "bg-gray-500 group-hover:bg-gray-700",
  blue: "bg-blue-500 group-hover:bg-blue-700",
  green: "bg-green-500 group-hover:bg-green-700",
  red: "bg-red-500 group-hover:bg-red-700",
  yellow: "bg-yellow-500 group-hover:bg-yellow-700",
};

const Text: React.FC<Props> = ({ color, children, className = "" }) => (
  <div className={`text-gray-50 ${styles[color]} ${className}`}>{children}</div>
);

export default Text;
