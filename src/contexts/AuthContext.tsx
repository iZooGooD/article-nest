import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { API } from "src/services/api";
import { authReducer, AuthState, AuthAction } from "src/reducers/authReducer";

interface AuthContextProps {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  token: null,
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  const login = async (username: string, password: string) => {
    try {
      const { token, user } = await API.login(username, password);
      if (!token) {
        return Promise.reject("Invalid email or password");
      }
      return dispatch({ type: "LOGIN", payload: { user, token } });
    } catch (e) {
      console.error("Error: ", e.message);
      return Promise.reject("Something went wrong on the server!");
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
