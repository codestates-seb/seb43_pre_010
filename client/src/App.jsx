import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import QuestionsPage from './pages/QuestionsPage';
import QuestionAskPage from './pages/QuestionAskPage';
import AnswerEditPage from './pages/AnswerEditPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions/:questionId" element={<QuestionsPage />} />
        <Route path="/questions/ask/:questionId" element={<QuestionAskPage />} />
        <Route path="/answer/edit/:answerId" element={<AnswerEditPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
