import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Auth from "./pages/auth";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
