import { Link, NavLink } from "../router";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </header>
      <article>{children}</article>
      <aside>
        <Link to="/scorecard/black">Black</Link>
        <Link to="/scorecard/blue">Blue</Link>
        <Link to="/scorecard/green">Green</Link>
        <Link to="/scorecard/red">Red</Link>
        <Link to="/scorecard/yellow">Yellow</Link>
      </aside>
    </div>
  );
};

export default Layout;
