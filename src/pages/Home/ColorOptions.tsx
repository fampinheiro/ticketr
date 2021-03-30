import { ComponentProps } from "react";
import { settings } from "../../state/atoms";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { Color, Text } from "../../components";
import * as constants from "../../constants";

type ColorType = ComponentProps<typeof Color>["color"];
const ColorOptions = () => {
  const hooks: Record<ColorType, [boolean, SetterOrUpdater<boolean>]> = {
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
    <div className="my-4">
      <Text strong>Select the playing colors</Text>
      <ul className={`flex flex-row justify-center space-x-4`}>
        {constants.Color.options.map((color) => {
          const [value] = hooks[color];
          return (
            <li key={`c-${color}`}>
              <button onClick={handleClick(color)}>
                <Color
                  color={color}
                  disabled={!value}
                  className={`rounded w-8 h-8 shadow`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorOptions;
