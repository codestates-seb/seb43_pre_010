import axios from 'axios';

const url = 'http://ec2-43-201-77-252.ap-northeast-2.compute.amazonaws.com:8080';

// 홈 페이지 질문 데이터 가져오기
export const getHomeQuestion = async () => {
  try {
    const response = await axios.get(`${url}/`);
    const { data } = response;
    return data;
  } catch (error) {
    console.error('Error fetching question data:', error);
    throw error;
  }
};

// 모든 질문 페이지 단위로 조회
export const getAllQuestion = async (page) => {
  try {
    const response = await axios.get(`${url}/questions?page=${page}&size=15&sort=newest`);
    const { data } = response;
    return data;
  } catch (error) {
    console.error('Error fetching question data:', error);
    throw error;
  }
};

// 질문 상세 페이지 질문 데이터 가져오기
// 질문 조회에 질문에 포함된 모든 답변 조회까지 포함되어 있다.
export const getQuestionDetail = async (id) => {
  try {
    const response = await axios.get(`${url}/questions/${id}`);
    const { data } = response;
    return data;
  } catch (error) {
    console.error('Error fetching question data:', error);
    throw error;
  }
};
