import { NavLink } from "../router";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="m-auto max-w-xs py-2">
      <header>
        <div className="flex flex-row justify-center space-x-4">
          <NavLink to="/">Home</NavLink>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
