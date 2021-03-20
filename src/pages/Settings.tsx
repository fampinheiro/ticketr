import { Link } from "../router";
import Layout from "./Layout";

const Settings = () => (
  <Layout>
    <header className="App-header">
      <Link to="/">Home</Link>
    </header>
    <p>Settings</p>
  </Layout>
);

export default Settings;
