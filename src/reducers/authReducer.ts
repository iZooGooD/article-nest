import { UserType } from "src/utils/types/user";

export interface AuthState {
  user: null | UserType;
  isAuthenticated: boolean;
  token: string | null;
}

export type AuthAction =
  | { type: "LOGIN"; payload: { user: AuthState["user"]; token: string } }
  | { type: "LOGOUT" }
  | { type: "REFRESH_TOKEN"; payload: { token: string } };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        token: null,
      };
    case "REFRESH_TOKEN":
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return state;
  }
};
