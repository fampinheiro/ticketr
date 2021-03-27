import Layout from "./Layout";
import { Text } from "../components";
import { useRecoilState } from "recoil";
import { settings } from "../state/atoms";
import { Color } from "../constants";

const Settings = () => {
  const hooks = {
    black: useRecoilState(settings.colors("black")),
    blue: useRecoilState(settings.colors("blue")),
    green: useRecoilState(settings.colors("green")),
    red: useRecoilState(settings.colors("red")),
    yellow: useRecoilState(settings.colors("yellow")),
  };

  const handleClick = (color: keyof typeof hooks) => () => {
    const [value, setValue] = hooks[color];
    setValue(!value);
  };

  return (
    <Layout>
      <Text strong>Select the playing colors</Text>
      <ul className={`flex flex-row  space-x-4`}>
        {Color.options.map((color) => {
          const [value] = hooks[color];
          return (
            <li key={`c-${color}`}>
              <button onClick={handleClick(color)}>
                <Text>
                  {value ? "yes" : "not"} {color}
                </Text>
              </button>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Settings;
