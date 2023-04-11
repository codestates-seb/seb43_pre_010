import axios from "axios";

export const getQuestion = async (questionId) => {
  try {
    // 서버단에서 API가 만들어지면 사용할 코드
    // const url = `https://api.example.com/questions/${questionId}`;
    // const response = await axios.get(url);
    // const data = response.data;

    const data = {
      questionId: "1",
      vote: 3,
      title: "How to get Azure Cache for Redis connection string stored in App Service as Environment Variable?",
      content:
        "I have an Azure Cache for Redis instance and an App Service. I want to store the Redis connection string as an environment variable in the App Service. How can I do this?",
      answers: [
        {
          id: "1",
          content: "Answer 1 content...",
          upvotes: 5,
        },
        {
          id: "2",
          content: "Answer 2 content...",
          upvotes: 3,
        },
      ],
    };

    return data;
  } catch (error) {
    console.error("Error fetching question data:", error);
    throw error;
  }
};
