import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  selectedProject: null,
  filters: {
    Search: "",
    status: "all",
  },
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
  },
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },

    addProject: (state, action) => {
      state.projects.unshift(action.payload);
    },

    updateProject: (state, action) => {
      const index = state.projects.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.projects[index] = { ...state.projects[index], ...action.payload };
      }
    },

    deleteProject: (state, action) => {
      state.projects = state.projects.filter((p) => p.id !== action.payload);
    },

    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },

    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },

    setPagination: (state, action) => {
      state.pagination = { ...state.pagination, ...action.payload };
    },
  },
});

export const {
  setProjects,
  addProject,
  updateProject,
  deleteProject,
  setSelectedProject,
  setFilters,
  setPagination,
} = projectSlice.actions;

export default projectSlice.reducer;
