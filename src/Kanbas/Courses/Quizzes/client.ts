import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
const QUESTIONS_API = `${REMOTE_SERVER}/api/questions`;

export const findQuestionsForQuiz = async (quizId: string) => {
  const response = await axiosWithCredentials.get(
    `${QUIZZES_API}/${quizId}/questions`
  );
  return response.data;
};
export const findQuizById = async (quizId: string) => {
  const response = await axiosWithCredentials.get(`${QUIZZES_API}/${quizId}`);
  return response.data;
};

export const updateQuiz = async (quizId: string, quizUpdates: any) => {
  const response = await axiosWithCredentials.put(
    `${QUIZZES_API}/${quizId}`,
    quizUpdates
  );
  return response.data;
};

export const deleteQuiz = async (quizId: string) => {
  const response = await axiosWithCredentials.delete(
    `${QUIZZES_API}/${quizId}`
  );
  return response.data;
};

export const findQuestionById = async (questionId: string) => {
  const response = await axiosWithCredentials.get(
    `${QUESTIONS_API}/${questionId}`
  );
  return response.data;
};

export const createQuestion = async (quizId: string, question: any) => {
  const response = await axiosWithCredentials.post(
    `${QUIZZES_API}/${quizId}/questions`,
    question
  );
  return response.data;
};

export const updateQuestion = async (
  questionId: string,
  questionUpdates: any
) => {
  const response = await axiosWithCredentials.put(
    `${QUESTIONS_API}/${questionId}`,
    questionUpdates
  );
  return response.data;
};

export const deleteQuestion = async (questionId: string) => {
  const response = await axiosWithCredentials.delete(
    `${QUESTIONS_API}/${questionId}`
  );
  return response.data;
};
