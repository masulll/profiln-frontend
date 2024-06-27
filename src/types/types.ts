export interface TabContextProps {
  activeTab?: string;
  formSubmitted?: { [key: string]: boolean };
  handleTabChange?: (tab: string | null) => void;
  handleFormSubmit?: (tab: string) => void;
  changeTab?: (currentTab: string, direction: "next" | "back") => void;
  handleNext?: (tab: string) => void;
  handleBack?: (tab: string) => void;
}

export interface FormSubmittedState {
  tab1: boolean;
  tab2: boolean;
  tab3: boolean;
  tab4: boolean;
  tab5: boolean;
  tab6: boolean;
}

export interface ErrorResponse {
  error: string;
  message: string;
  status: number;
}

export interface SuccessResponse<T> {
  status: number;
  message: string;
  data: T;
}
