import { ComponentProps } from "react";
import { useRecoilValue } from "recoil";
import { Link } from "../../router";
import { Text, Color, Segment } from "../../components";
import { settings, totalScoreValue } from "../../state/atoms";

type ColorType = ComponentProps<typeof Segment>["color"];

const Scoreboard = () => {
  const totalScore = useRecoilValue(totalScoreValue);
  const colors = useRecoilValue(settings.activeColors);

  if (colors.length) {
    return (
      <aside>
        <ul className="flex flex-row justify-center space-x-4 py-4">
          {Object.entries(totalScore).map(([color, value]) => (
            <li key={`c-${color}`}>
              <Color color={color as ColorType} className={`rounded-lg shadow`}>
                <Link className="block py-2 px-4" to={`/${color}`}>
                  {value}
                </Link>
              </Color>
            </li>
          ))}
        </ul>
      </aside>
    );
  }

  return (
    <Text>
      No colors selected, you can change this on{" "}
      <Link to="/">the previous page</Link>
    </Text>
  );
};

export default Scoreboard;
