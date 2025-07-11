import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      // Aquí puedes añadir lógica para asignar roles (ej: desde Firestore)
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}