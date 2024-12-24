import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeButton from "./components/ToggleTheme";
import Home from "./pages/Home";
import NotFoundPage from "./pages/404";

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ThemeButton />
    </Router>
  )
};

export default App
