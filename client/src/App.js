import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Questions from "./pages/questions";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions/:questionId" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
