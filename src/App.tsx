import Providers from "./providers";
import { Router, Route } from "./router";
import { Home, Scorecard, Settings } from "./pages";

const App = () => {
  return (
    <Providers>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/settings" component={Settings} />
        <Route path="/scorecard/:color" component={Scorecard} />
      </Router>
    </Providers>
  );
};

export default App;
