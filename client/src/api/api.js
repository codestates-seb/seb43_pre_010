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
      title: "Can I use intellisence for linux system like arpa in vscode on windows?",
      content:
        "I installed linux on WSL. I make a c file in the mnt/ folder. I installed vs code and c/c++ extension, wsl extention. And then configurated intellisence for gcc complier. but VSCODE doesn't recommed line for linux like arpa/inet.h, sys/socket. What can i do for it? How to configure vscode intelligence for linux on windows?",
      answers: [
        {
          id: "1",
          content:
            "Yes you can use code intelligence in vs code for linux as well, try pressing 'Ctrl + Space' to toggle intellisense alternatively if you dont want to have intellisense ON all the time, you can press 'Tab' whenever you do want suggestions for the current line of code..",
          upvotes: 5,
        },
        {
          id: "2",
          content: "No, You can't use code intelligence in vs code for linux",
          upvotes: 3,
        },
      ],
    };

    const data2 = {
      questionId: "2",
      vote: 3,
      title: "linux system like arpa in vscode on windows?",
      content:
        "I installed linux on WSL. I make a c file in the mnt/ folder. I installed vs code and c/c++ extension, wsl extention. And then configurated intellisence for gcc complier. but VSCODE doesn't recommed line for linux like arpa/inet.h, sys/socket. What can i do for it? How to configure vscode intelligence for linux on windows?",
      answers: [
        {
          id: "1",
          content:
            "Yes you can use code intelligence in vs code for linux as well, try pressing 'Ctrl + Space' to toggle intellisense alternatively if you dont want to have intellisense ON all the time, you can press 'Tab' whenever you do want suggestions for the current line of code..",
          upvotes: 5,
        },
        {
          id: "2",
          content: "No, You can't use code intelligence in vs code for linux",
          upvotes: 3,
        },
      ],
    };

    if (questionId === "1") return data;
    else if (questionId === "2") return data2;
  } catch (error) {
    console.error("Error fetching question data:", error);
    throw error;
  }
};
