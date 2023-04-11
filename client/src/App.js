import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from "./pages/questions";
import GlobalStyle from "./globalStyle";

const App = () => {
  return (
    <GlobalStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/questions/:questionId" element={<Questions />} />
        </Routes>
      </BrowserRouter>
    </GlobalStyle>
  );
};

export default App;
