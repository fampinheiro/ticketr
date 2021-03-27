import { NavLink } from "../router";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="m-auto max-w-xs py-2">
      <header>
        <div className="flex flex-row justify-center space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </div>
      </header>
      <article className="py-4">{children}</article>
    </div>
  );
};

export default Layout;
