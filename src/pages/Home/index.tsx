import Home from "./Home";
import Layout from "../Layout";
import { Text } from "../../components";
import { Link, Redirect, Route as RouterRoute } from "../../router";
import { useRecoilValue } from "recoil";
import { settings } from "../../state/atoms";

const Route = () => {
  const [color] = useRecoilValue(settings.activeColors);
  if (!color) {
    return (
      <Layout>
        <Text>
          No colors selected, you can change this on{" "}
          <Link to="/settings">settings</Link>
        </Text>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="m-auto max-w-xs">
        <RouterRoute path="/s/:color" exact component={Home} />
        <Redirect to={`/s/${color}`} />
      </div>
    </Layout>
  );
};

export default Route;
