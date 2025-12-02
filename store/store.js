import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import projectReducer from "./slices/projectSlice";
import taskReducer from "./slices/taskSlice";
import teamReducer from "./slices/teamSlice";
import notificationReducer from "./slices/notificationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer,
    tasks: taskReducer,
    team: teamReducer,
    notifications: notificationReducer,
  },
});
