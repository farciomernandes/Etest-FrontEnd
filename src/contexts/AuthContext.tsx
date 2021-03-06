import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { LoginUser, UserDTO } from "../types";
import Router from "next/router";

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (form: LoginUser) => Promise<void>;
  signOut: () => void;
  setUser: (user) => void;
  user: UserDTO;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<UserDTO | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {

      const { "authToken.etest": token } = parseCookies();

      if (token) {
        api.get(`/autenticacao/${token}`).then(response=>{
            setUser(response.data.usuario);
        })
      }
  }, []);

  async function signIn(form) {
    const response = await api.post("/autenticacao", form);
    const { data } = response;
    const { token, usuario, tipo } = data;

    setCookie(undefined, "authToken.etest", token, {
      maxAge: 60 * 60 * 24, // 24 horas
    });

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(usuario);

    Router.push("/dashboard");
  }

  function signOut(){
    destroyCookie(undefined, "authToken.etest");

    api.defaults.headers['Authorization'] = `Bearer`;

    setUser(null);

    Router.push("/");
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user, signOut, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
