import Providers from "./providers";
import { Router, Route } from "./router";
import { Home, Settings } from "./pages";

const App = () => {
  return (
    <Providers>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/s" component={Home} />
        <Route path="/settings" exact component={Settings} />
      </Router>
    </Providers>
  );
};

export default App;
