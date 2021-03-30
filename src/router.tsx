import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Home, Color, NotFound } from "./pages";
import { settings } from "./state/atoms";

export * from "react-router-dom";

export const Routes = () => {
  const colors = useRecoilValue(settings.activeColors);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {colors.map((color) => {
          return (
            <Route key={`r-${color}`} path={`/${color}`} exact>
              <Color color={color} />
            </Route>
          );
        })}
        <Route path={"*"} component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
