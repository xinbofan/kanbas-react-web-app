import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: [],
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },

    addQuiz: (state, { payload: quiz }) => {
      const newQuiz: any = {
        _id: new Date().getTime().toString(),
        title: quiz.title,
        description: quiz.description,
        quizType: quiz.quizType || "Graded Quiz",
        points: quiz.points || 0,
        assignmentGroup: quiz.assignmentGroup || "Quizzes",
        shuffleAnswers: quiz.shuffleAnswers || false,
        timeLimit: quiz.timeLimit || 20,
        multipleAttempts: quiz.multipleAttempts || false,
        maxAttempts: quiz.maxAttempts || 1,
        showCorrectAnswers: quiz.showCorrectAnswers || "Immidietely",
        accessCode: quiz.accessCode || "",
        oneQuestionAtATime: quiz.oneQuestionAtATime || true,
        webcamRequired: quiz.webcamRequired || false,
        lockQuestionsAfterAnswering: quiz.lockQuestionsAfterAnswering || false,
        dueDate: quiz.dueDate || null,
        availableFrom: quiz.availableFrom || null,
        availableUntil: quiz.availableUntil || null,
        questions: quiz.questions || [],
        isPublished: quiz.isPublished || false,
        course: quiz.course,
      };
      state.quizzes = [...state.quizzes, newQuiz] as any;
    },

    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter((quiz: any) => quiz._id !== quizId);
    },

    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quiz._id ? quiz : q
      ) as any;
    },
  },
});

export const { setQuizzes, addQuiz, deleteQuiz, updateQuiz } =
  quizzesSlice.actions;

export default quizzesSlice.reducer;
