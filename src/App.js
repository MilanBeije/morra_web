import "./App.css";
import { Text } from "react-native";
import { Route, Routes } from "react-router-dom";
import PAGES from "./router/pages";
import WebLogin from "./pages/WebLogin";
import WebGame from "./pages/WebGame";
import WebRanking from "./pages/WebRanking";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={PAGES.login} element={<WebLogin />} />
        <Route path={PAGES.game} element={<WebGame />} />
        <Route path={PAGES.ranking} element={<WebRanking />} />
      </Routes>
    </div>
  );
}

export default App;
