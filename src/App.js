import { HashRouter as Router } from "react-router-dom";
import RootLanding from "./components/RootLanding";
import LandingPage from "./components/views/LandingPage/LandingPage";
import SpanishComingSoon from "./components/SpanishComingSoon";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RootLanding} />
        <Route path="/english" component={LandingPage} />
        <Route path="/spanish" component={SpanishComingSoon} />
      </Switch>
    </Router>
  );
}

export default App;