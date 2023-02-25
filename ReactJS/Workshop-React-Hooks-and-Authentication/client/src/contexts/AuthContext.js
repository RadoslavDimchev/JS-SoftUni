import { createContext, useContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
  children
}) => {
  const [auth, setAuth] = useLocalStorage('auth', {});

  const userLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    setAuth({});
  };

  return (
    <AuthContext.Provider value={{ user: auth, userLogin, userLogout }} >
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuthContext = () => useContext(AuthContext);

// with HOC
export const withAuth = (Component) => {
  const AuthWrapper = (props) => {
    const context = useContext(AuthContext);

    return <Component {...props} auth={context} />;
  };

  return AuthWrapper;
};