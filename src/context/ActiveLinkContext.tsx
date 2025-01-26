import React, { createContext, useContext, useState, ReactNode } from "react";

interface ActiveLinkContextType {
  activeLink: string;
  setActiveLink: (value: string) => void;
}

const ActiveLinkContext = createContext<ActiveLinkContextType | undefined>(
  undefined
);

export const ActiveLinkProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeLink, setActiveLink] = useState<string>("home");

  return (
    <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};

export const useActiveLink = (): ActiveLinkContextType => {
  const context = useContext(ActiveLinkContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
