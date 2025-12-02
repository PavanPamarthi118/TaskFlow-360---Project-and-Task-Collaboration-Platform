import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  members: [],
  invitations: [],
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setMembers: (state, action) => {
      state.members = action.payload;
    },
    
    addMember: (state, action) => {
      state.members.push(action.payload);
    },
    
    updateMember: (state, action) => {
      const index = state.members.findIndex(m => m.id === action.payload.id);
      if (index !== -1) {
        state.members[index] = { ...state.members[index], ...action.payload };
      }
    },
    
    removeMember: (state, action) => {
      state.members = state.members.filter(m => m.id !== action.payload);
    },
    
    setInvitations: (state, action) => {
      state.invitations = action.payload;
    },
    
    addInvitation: (state, action) => {
      state.invitations.push(action.payload);
    },
  },
});

export const {
  setMembers,
  addMember,
  updateMember,
  removeMember,
  setInvitations,
  addInvitation,
} = teamSlice.actions;

export default teamSlice.reducer;
