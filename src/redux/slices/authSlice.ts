import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// ─── Types ───────────────────────────────────────────────
export interface User {
  name?: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

// ─── Initial State ───────────────────────────────────────
const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// ─── Slice ───────────────────────────────────────────────
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // ── Login ──────────────────────────────
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    // ── Signup ─────────────────────────────
    signupStart(state) {
      state.loading = true;
      state.error = null;
    },
    signupSuccess(
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
    },
    signupFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    // ── Logout ─────────────────────────────
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },

    // ── Clear Error ────────────────────────
    clearAuthError(state) {
      state.error = null;
    },
  },
});

// ─── Exports ─────────────────────────────────────────────
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  signupStart,
  signupSuccess,
  signupFailure,
  logout,
  clearAuthError,
} = authSlice.actions;

export default authSlice.reducer;
