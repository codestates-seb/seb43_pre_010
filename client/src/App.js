import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from "./pages/questions";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/questions/:questionId" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
