import React, { createContext,useState } from "react";

interface UserContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextType>({
  theme: localStorage.getItem('flowbite-theme-mode') || 'dark' ,
  setTheme: () => {}
});

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(localStorage.getItem('flowbite-theme-mode') ||'dark');

  return (
    <UserContext.Provider value={{ theme, setTheme }}>
      {children}
    </UserContext.Provider>
  );
}
