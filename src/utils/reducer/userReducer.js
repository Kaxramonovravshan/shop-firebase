import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userObj: { email: "", password: "", repeatPassword: "" }
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    getEmail: (state, action) => {
      state.userObj.email = action.payload;
    },
    getPassword: (state, action) => {
      state.userObj.password = action.payload;
    },
    getRepeatPassword: (state, action) => {
      state.userObj.repeatPassword = action.payload;
    }
  }
});

function loadUsers() {
  return {
    type: "apiCall",
    payload: {
      collection: "users",
      method: "GET",
      data: "",
      onSuccess: userSlice.actions.getUsers
    }
  };
}

function saveUser(data,navigate) {
  return {
    type: "apiCall",
    payload: {
      collection: "users",
      method: "POST",
      data,
      navigate,
      onSuccess: loadUsers
    }
  };
}

export const userAction = {
  ...userSlice.actions,
  loadUsers,
  saveUser
};

export default userSlice;
