import { ComponentProps } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import Track from "../components/Track";
import Layout from "./Layout";

import { singleScoreValue, settings, totalScoreValue } from "../state/atoms";

type Props = Pick<ComponentProps<typeof Track>, "color" | "size">;
const Score: React.FC<Props> = (props) => {
  const { color, size } = props;
  const [quantity, setQuantity] = useRecoilState(
    singleScoreValue({ color, lenght: size })
  );

  const handleClick = () => setQuantity(quantity + 1);
  const handleLongPress = () => setQuantity(quantity - 1);

  return (
    <Track
      {...props}
      quantity={quantity}
      onLongPress={handleLongPress}
      onClick={handleClick}
    />
  );
};

const Scorecard = () => {
  const { color } = useParams<{
    color: ComponentProps<typeof Track>["color"];
  }>();
  const values = useRecoilValue(settings.segments);
  const totalScore = useRecoilValue(totalScoreValue(color));

  return (
    <Layout>
      <p>{color}</p>
      <ul>
        {values.map((props) => {
          return (
            <li key={`t-${props}`}>
              <Score color={color} size={props} />
            </li>
          );
        })}
      </ul>
      <p>{totalScore}</p>
    </Layout>
  );
};

export default Scorecard;
