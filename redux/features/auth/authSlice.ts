import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token: string;
    user: string;
}

interface UserRegistrationPayload {
    token: string;
}

interface UserLoggedInPayload {
    accessToken: string;
    user: string;
}

const initialState: AuthState = {
    token: "",
    user: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userRegistration: (state, action: PayloadAction<UserRegistrationPayload>) => {
            state.token = action.payload.token;
        },
        userLoggedIn: (state, action: PayloadAction<UserLoggedInPayload>) => {
            state.token = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut: (state) => {
            state.token = "";
            state.user = "";
        },
    },
});

export const { userRegistration, userLoggedIn, userLoggedOut } = authSlice.actions;
