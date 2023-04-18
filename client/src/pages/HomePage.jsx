import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getQuestion } from '../api/api';

import LeftNav from '../components/common/LeftNav';
import MainnHeader from '../components/main/MainHeader';
import MainContent from '../components/main/MainContent';

const Home = () => {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuestion(3);
      setQuestions(data);
    };
    fetchData();
  }, []);

  // Axios 로딩 관련 문제 고민
  if (!questions) {
    return <div>Loading...</div>;
  }
  return (
    <MainContainer>
      <LeftNav />
      <HomeContainer>
        <MainnHeader />
        <MainContent questions={questions} />
      </HomeContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  max-width: 1264px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex: 1 0 auto;
`;

const HomeContainer = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  border-radius: 0;
  border-left: 1px solid hsl(210, 8%, 85%);
  margin: 0 auto;
  text-align: left;
`;

export default Home;
