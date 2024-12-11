import { useContext, createContext } from "react";
const AuthContext = createContext();

export default function AuthProvider ({ children }) {
    return <AuthContext.Provider value="admin">{children}</AuthContext.Provider>;
};


export const useAuth = () => {
  return useContext(AuthContext);
};