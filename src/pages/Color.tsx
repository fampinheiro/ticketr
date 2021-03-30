import React, { ComponentProps } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { Segment } from "../components";
import { singleScoreValue, settings } from "../state/atoms";
import Layout from "./Layout";
import Scoreboard from "./partials/Scoreboard";
import Reset from "./partials/Reset";

type Props = Pick<ComponentProps<typeof Segment>, "color" | "size">;
const Score: React.FC<Props> = (props) => {
  const { color, size } = props;
  const [quantity, setQuantity] = useRecoilState(
    singleScoreValue({ color, lenght: size })
  );

  const handleUpClick = () => setQuantity(quantity + 1);
  const handleDownClick = () => setQuantity(Math.max(quantity - 1, 0));

  return (
    <Segment
      {...props}
      quantity={quantity}
      onUp={handleUpClick}
      onDown={handleDownClick}
    />
  );
};

const Home: React.FC<Pick<ComponentProps<typeof Segment>, "color">> = ({
  color,
}) => {
  const values = useRecoilValue(settings.activeSegments);

  return (
    <Layout>
      <Scoreboard />
      <article className="py-4">
        <ul className="flex flex-row flex-wrap justify-center p-1">
          {values.map((props) => {
            return (
              <li key={`t-${props}`} className="p-1">
                <Score color={color} size={props} />
              </li>
            );
          })}
        </ul>
      </article>
      <div className={`py-4`}>
        <Reset />
      </div>
    </Layout>
  );
};

export default Home;
