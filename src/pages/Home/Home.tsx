import React, { ComponentProps } from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import { Color, Segment, Text } from "../../components";
import { singleScoreValue, settings, totalScoreValue } from "../../state/atoms";

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

type ColorType = ComponentProps<typeof Segment>["color"];

const Home = () => {
  const { color } = useParams<{
    color: ColorType;
  }>();

  const values = useRecoilValue(settings.activeSegments);
  const totalScore = useRecoilValue(totalScoreValue);
  const colorsComponent = useRecoilValue(settings.activeColors) ? (
    <aside>
      <ul className="flex flex-row justify-center space-x-4 my-4">
        {Object.entries(totalScore).map(([color, value]) => (
          <li key={`c-${color}`}>
            <Color color={color as ColorType} className={`rounded-lg shadow`}>
              <Link className="block py-2 px-4" to={`/s/${color}`}>
                {value}
              </Link>
            </Color>
          </li>
        ))}
      </ul>
    </aside>
  ) : (
    <Text>
      No colors selected, you can change this on{" "}
      <Link to="/settings">settings</Link>
    </Text>
  );
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
      {colorsComponent}
    </>
  );
};

export default Home;
