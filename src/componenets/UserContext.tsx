import React, { createContext, useContext, useState } from "react";

interface UserContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextType>({
  theme: 'dark',
  setTheme: () => {}
});

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('dark');

  return (
    <UserContext.Provider value={{ theme, setTheme }}>
      {children}
    </UserContext.Provider>
  );
}
