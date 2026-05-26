import { Route, Switch } from "react-router-dom";
import RootLanding from "./components/RootLanding";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LandingPageSpanish from "./components/views/LandingPageSpanish/LandingPageSpanish";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <RootLanding />} />
      <Route exact path="/english" render={() => <LandingPage />} />
      <Route exact path="/spanish" render={() => <LandingPageSpanish />} />
    </Switch>
  );
}

export default App;