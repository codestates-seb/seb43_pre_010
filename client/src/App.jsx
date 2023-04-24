import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import QuestionsPage from './pages/QuestionsPage';
import QuestionAskPage from './pages/QuestionAskPage';
import AnswerEditPage from './pages/AnswerEditPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions/:questionId" element={<QuestionsPage />} />
        <Route path="/questions/ask/:questionId" element={<QuestionAskPage />} />
        <Route path="/answer/edit/:answerId" element={<AnswerEditPage />} />
        <Route path="/users/:usersId" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
