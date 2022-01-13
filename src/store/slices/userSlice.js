import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  password: null,
  name: null,
  picture: null,
  instagram: null,
  gmail: null,
  textarea: null,
  status: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    logIn(state, action) {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.name = action.payload.name;
      state.instagram = action.payload.instagram;
      state.gmail = action.payload.gmail;
      state.aboutUser = action.payload.aboutUser;
      state.status = action.payload.status;
    },
    addUserInfo(state, action) {
      state.name = action.payload.name;
      state.picture = action.payload.picture;
      state.instagram = action.payload.instagram;
      state.gmail = action.payload.gmail;
      state.aboutUser = action.payload.aboutUser;
      state.status = action.payload.status;
    },
    logout(state) {
      state = initialState;
    },
    clearData(state) {
      state = initialState;
    },
  },
});

export const sendNewUser = (user) => {

  return (dispatch) => {
    console.log(user);

    async function addNewUser(userData) {
      try {
        const response = await fetch(
          "https://registration4courserefactored-default-rtdb.europe-west1.firebasedatabase.app/users.json",
          {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        const data = await response.json();
        console.log(data);
      } catch (err) {
        alert(err);
      }
    }
    addNewUser({
      username: user.username,
      password: user.password,
      status: user.status,
      name: user.name,
      aboutUser: user.aboutUser,
      gamil: user.gmail,
      instagram: user.instagram,
    });

    dispatch(
      userActions.addUserInfo({
        name: user.name,
        picture: null, // Because firebase realtime database don't accept images.
        instagram: user.instagram,
        gmail: user.gmail,
        aboutUser: user.aboutUser,
        status: "NotAccepted",
      })
    );
  };
};

export const userActions = userSlice.actions;
export default userSlice;
