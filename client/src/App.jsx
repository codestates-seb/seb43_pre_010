import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from "react-redux";
import { login, getUserInfo } from './slices/authSlice';
import Home from './pages/HomePage';
import QuestionsPage from './pages/QuestionsPage';
import QuestionAskPage from './pages/QuestionAskPage';
import AnswerEditPage from './pages/AnswerEditPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {

  const [ cookies ] = useCookies(['jwt']);
  
  const dispatch = useDispatch();

  const patchUserProfile = async () => {
    try  {
      const token = cookies.jwt;
      if (!token) return;
      
      const response = await axios.get('http://localhost:8000/', {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      const resUserData = response.data;
      
      dispatch(login({
        email: resUserData.email,
        name: resUserData.name,
        isLogin: true,
      }));
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    patchUserProfile();
  });

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
