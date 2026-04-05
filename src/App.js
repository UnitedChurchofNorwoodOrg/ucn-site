import { Route, Switch } from "react-router-dom";
import RootLanding from "./components/RootLanding";
import LandingPage from "./components/views/LandingPage/LandingPage";
import SpanishComingSoon from "./components/views/LandingPageSpanish/SpanishComingSoon";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <RootLanding />} />
      <Route exact path="/english" render={() => <LandingPage />} />
      <Route exact path="/spanish" render={() => <SpanishComingSoon />} />
    </Switch>
  );
}

export default App;