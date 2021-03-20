import { NavLink } from "../router";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="App">
      <header className="m-auto max-w-xs py-4">
        <div className="flex flex-row justify-center space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </div>
      </header>
      <article>{children}</article>
    </div>
  );
};

export default Layout;
