import Layout from "../Layout";
import { useRecoilValue } from "recoil";
import { settings } from "../../state/atoms";
import { Link } from "react-router-dom";
import ColorOptions from "./ColorOptions";
import { Button } from "../../components";

const Home = () => {
  const [firstColor] = useRecoilValue(settings.activeColors);
  return (
    <Layout>
      <ColorOptions />
      <div className="my-4">
        <Link className={`block overflow-hidden`} to={`/${firstColor}`}>
          <Button>Start</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
