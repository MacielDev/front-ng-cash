import { createContext } from "react";

interface IUser{
  id: string;
  email: string;
  name: string;
  password: string;
}

interface IAuth{
  user: IUser | null;
  token: string | null;
  validated: boolean;
  loading: boolean;
  login: (email: string, passoword: string) => Promise<boolean>; 
  logout: () => void;
}

export const AuthContext = createContext<IAuth>(null!);