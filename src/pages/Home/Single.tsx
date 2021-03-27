import { ComponentProps } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import Track from "../../components/Track";
import { singleScoreValue, settings } from "../../state/atoms";

type Props = Pick<ComponentProps<typeof Track>, "color" | "size">;
const Score: React.FC<Props> = (props) => {
  const { color, size } = props;
  const [quantity, setQuantity] = useRecoilState(
    singleScoreValue({ color, lenght: size })
  );

  const handleUpClick = () => setQuantity(quantity + 1);
  const handleDownClick = () => setQuantity(Math.max(quantity - 1, 0));

  return (
    <Track
      {...props}
      quantity={quantity}
      onUp={handleUpClick}
      onDown={handleDownClick}
    />
  );
};

const Single = () => {
  const { color } = useParams<{
    color: ComponentProps<typeof Track>["color"];
  }>();
  const values = useRecoilValue(settings.segments);

  return (
    <>
      <ul className="flex flex-col flex-wrap justify-center p-1">
        {values.map((props) => {
          return (
            <li key={`t-${props}`} className="p-1">
              <Score color={color} size={props} />
            </li>
          );
        })}
      </ul>
      <p className="py-2 text-center text-gray-700">
        Double click to remove segments
      </p>
    </>
  );
};

export default Single;
