import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Questions from "./pages/QuestionsPage";
import LoginPage from "./pages/LoginPage";
import QuestionAsk from "./pages/QuestionAskPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions/:questionId" element={<Questions />} />
        <Route path="/users/login" element={<LoginPage />} />
        <Route path="/questions/ask/:questionId" element={<QuestionAsk />}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
