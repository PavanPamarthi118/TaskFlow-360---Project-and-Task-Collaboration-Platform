import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  selectedTask: null,
  filters: {
    status: "all",
    priority: "all",
    assignee: "all",
  },
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },

    addTask: (state, action) => {
      state.tasks.unshift(action.payload);
    },

    updateTask: (state, action) => {
      const index = state.tasks.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
      }
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },

    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },

    setTaskFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },

    addComment: (state, action) => {
      const { taskId, comment } = action.payload;
      const task = state.tasks.find((t) => t.id === taskId);
      if (task) {
        task.comments = task.comments || [];
        task.comments.push(comment);
      }
    },
  },
});

export const {
  setTasks,
  addTask,
  updateTask,
  deleteTask,
  setSelectedTask,
  setTaskFilters,
  addComment,
} = taskSlice.actions;

export default taskSlice.reducer;
