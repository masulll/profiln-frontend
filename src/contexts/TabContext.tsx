import React, { createContext, useContext, useState, ReactNode } from "react";
import { FormSubmittedState } from "binar/types/types";
interface TabContextType {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  formSubmitted: FormSubmittedState;
  setFormSubmitted: React.Dispatch<React.SetStateAction<FormSubmittedState>>;
  handleBack: (tab: string) => void;
  handleNextTab: (tab: string) => void;
}

interface TabProviderProps {
  children: ReactNode;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabProvider: React.FC<TabProviderProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [formSubmitted, setFormSubmitted] = useState<FormSubmittedState>({
    tab1: false,
    tab2: false,
    tab3: false,
    tab4: false,
    tab5: false,
    tab6: false,
  });

  const handleBack = (tab: string) => {
    const backTabIndex = parseInt(tab.substr(3));
    setActiveTab(`tab${backTabIndex}`);
  };

  const handleNextTab = (tab: string) => {
    const nextTabIndex = parseInt(tab.substring(3)) + 1;

    setActiveTab(`tab${nextTabIndex}`);
  };

  return (
    <TabContext.Provider
      value={{
        activeTab,
        setActiveTab,
        formSubmitted,
        setFormSubmitted,
        handleBack,
        handleNextTab,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
};
