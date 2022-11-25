import "./App.css";
import { Text } from "react-native";
import { Route, Routes } from "react-router-dom";
import PAGES from "./router/pages";
import WebLogin from "./pages/WebLogin";
import WebGame from "./pages/WebGame";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={PAGES.login} element={<WebLogin />} />
        <Route path={PAGES.game} element={<WebGame />} />
      </Routes>
    </div>
  );
}

export default App;
