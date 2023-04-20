import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Questions from "./pages/QuestionsPage";
import QuestionAsk from "./pages/QuestionAskPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions/:questionId" element={<Questions />} />
        <Route path="/questions/ask/:questionId" element={<QuestionAsk />}/>
        <Route path="/users/login" element={<LoginPage />} />
        <Route path="/users/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;