import * as z from "zod";
import { Color } from "../constants";

interface Props {
  readonly disabled?: boolean;
  readonly color: z.infer<typeof Color>;
  readonly className?: string;
}

const enabledStyles = {
  black: "bg-gray-500 group-hover:bg-gray-700",
  blue: "bg-blue-500 group-hover:bg-blue-700",
  green: "bg-green-500 group-hover:bg-green-700",
  red: "bg-red-500 group-hover:bg-red-700",
  yellow: "bg-yellow-500 group-hover:bg-yellow-700",
};

const disabledStyles = {
  black: "bg-gray-100 group-hover:bg-gray-300",
  blue: "bg-blue-100 group-hover:bg-blue-300",
  green: "bg-green-100 group-hover:bg-green-300",
  red: "bg-red-100 group-hover:bg-red-300",
  yellow: "bg-yellow-100 group-hover:bg-yellow-300",
};

const Text: React.FC<Props> = ({
  color,
  children,
  className = "",
  disabled = false,
}) => {
  const styles = disabled ? disabledStyles : enabledStyles;
  return (
    <div className={`text-gray-50 ${styles[color]} ${className}`}>
      {children}
    </div>
  );
};

export default Text;
