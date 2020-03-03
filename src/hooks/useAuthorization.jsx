import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

export const AuthDataContext = createContext(null);

const AuthDataProvider = ({ children }) => {
  const user = useSelector(store => store.LoginReducer.user);
  const logout = useSelector(store => store.LoginReducer.logout);
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    if (user) {
      setAuthData(user);
    }
    if (logout) {
      setAuthData(null);
    }
  }, [logout, user]);

  const onLogout = useCallback(() => {
    //dispatch(logoutAction());
    return <Redirect to="/" />;
  }, []);

  const onLogin = newAuthData => setAuthData(newAuthData);
  const authDataValue = useMemo(() => ({ authData, onLogin, onLogout }), [
    authData
  ]);

  return (
    <AuthDataContext.Provider value={authDataValue}>
      {children}
    </AuthDataContext.Provider>
  );
};

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;
