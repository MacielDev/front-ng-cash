import { useEffect, useState } from "react";
import { useAuth } from "src/shared/hooks/useAuth";
import { AuthContext } from "./AuthContext";


interface IAuthContextProviderProps{
  children: JSX.Element;
}

interface IUser{
  id: string;
  email: string;
  name: string;
  password: string;
}

export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [validated, setValidated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  
  const auth = useAuth();

  // UseEffect para verificar se está logado 
  useEffect(() => { 
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      validateToken(authToken);
    }
    setTimeout(() => {
      setLoading(false)
    },1000)
  },[])

  //Validate token
  const validateToken = async (authToken: string) => {
    const data = await auth.validateToken(authToken);
    if (data.token === authToken) {
      setUser(data.user);
      setValidated(true);
    }
  }

  //Login
  const login = async (email: string, password: string) => { 
    const data = await auth.login(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      setValidated(true);
      localStorage.setItem("authUser", data.user);
      localStorage.setItem("authToken", data.token);
      return true;
    }
    return false;
  }

  //Logout 
  const logout = async () => {
    const { user, token } = await auth.logout();
    setUser(user);
    setToken(token);
    setValidated(false);
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser")
  }

  return (
    <AuthContext.Provider
      value={{user, token,validated,loading,login,logout}}
    >
      {children}
    </AuthContext.Provider>
  )

}