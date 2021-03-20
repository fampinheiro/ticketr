import React from "react";
import { useRecoilValue } from "recoil";
import Home from "./Home";
import Single from "./Single";
import Layout from "../Layout";
import { Text } from "../../components";
import { Link, Route as RouterRoute } from "../../router";
import { Color, settings, totalScoreValue } from "../../state/atoms";

const styles: Record<Color, string> = {
  black: "bg-gray-500 hover:bg-gray-700",
  blue: "bg-blue-500 hover:bg-blue-700",
  green: "bg-green-500 hover:bg-green-700",
  red: "bg-red-500 hover:bg-red-700",
  yellow: "bg-yellow-500 hover:bg-yellow-700",
};

const Route = () => {
  const colors = useRecoilValue(settings.colors);
  const totalScore = useRecoilValue(totalScoreValue);
  const colorsComponent = colors.length ? (
    <aside>
      <ul className="flex flex-row justify-center space-x-4 my-4">
        {Object.entries(totalScore).map(([color, value]) => (
          <li
            key={`c-${color}`}
            className={`rounded-lg text-gray-50 ${styles[color as Color]}`}
          >
            <Link className="block py-2 px-4" to={`/s/${color}`}>
              {value}
            </Link>
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
    <Layout>
      <div className="m-auto max-w-xs">
        <RouterRoute path="/" exact component={Home} />
        <RouterRoute path="/s/:color" exact component={Single} />
        {colorsComponent}
      </div>
    </Layout>
  );
};

export default Route;
