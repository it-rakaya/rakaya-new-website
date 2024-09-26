/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Cookies from "js-cookie";
import { createContext, useCallback, useContext, useMemo } from "react";
import { UseLocalStorage } from "../../hooks/useLocalStorage";
import { useRouter } from "next/router";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = UseLocalStorage("user");
  const [token, setToken] = UseLocalStorage("token", null);

  const router = useRouter();
  const login = useCallback(
    async (data) => {
      if (setUser) setUser(data);
      Cookies.set("token", data.token);
      setToken(data?.token);
      router.push("/");
    },
    [setUser]
  );

  const logout = useCallback(async () => {
    setUser(null);
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    setToken(null);
    Cookies.remove("token");
    // window.location.reload();
    router.push("/");
  }, [setUser]);

  const value = useMemo(
    () => ({
      user,
      setUser,
      login,
      logout,
      token,
      setToken,
    }),
    [login, logout, user, setUser, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};
