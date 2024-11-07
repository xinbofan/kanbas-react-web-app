import { createSlice } from "@reduxjs/toolkit";
import { courses, enrollments } from "../Database";

const initialState = {
  courses: courses,
  enrollments: enrollments,
  showAllCourses: false,
  currentCourse: {
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
    department: "Default Department",
    credits: 3,
    author: "New author",
  },
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addNewCourse: (state) => {
      const newCourse = {
        ...state.currentCourse,
        _id: new Date().getTime().toString(),
      };
      state.courses.push(newCourse);
    },
    deleteCourse: (state, action) => {
      const courseId = action.payload;
      state.courses = state.courses.filter((course) => course._id !== courseId);
    },
    updateCourse: (state) => {
      state.courses = state.courses.map((c) =>
        c._id === state.currentCourse._id ? state.currentCourse : c
      );
    },
    toggleCourseView: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
  },
});

export const { addNewCourse, deleteCourse, updateCourse, toggleCourseView } =
  coursesSlice.actions;
export default coursesSlice.reducer;
