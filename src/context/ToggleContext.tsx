import React, { createContext, useContext, useState, ReactNode } from "react";

interface ToggleContextType {
  isToggleOpen: boolean;
  setIsToggleOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

export const ToggleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);

  return (
    <ToggleContext.Provider value={{ isToggleOpen, setIsToggleOpen }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = (): ToggleContextType => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
};
