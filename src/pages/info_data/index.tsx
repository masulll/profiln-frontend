import React, { useState } from "react";
import { Tab, Tabs, ProgressBar } from "react-bootstrap";
import { useTabContext } from "binar/contexts/TabContext";
import theme from "binar/constants";
import { IconArrowRight } from "binar/helpers";
import {
  styledFormLayout,
  styledUnderlineText,
} from "binar/styles/emotion/DataForm.style";
import {
  tabStyles,
  progressBarStyles,
  tabWrapperStyles,
} from "binar/styles/emotion/Tab.style";
import PersonalData from "binar/components/molecules/InformationForm/PersonalData";
import WorkHistory from "binar/components/molecules/InformationForm/WorkHistory";
import AboutMe from "binar/components/molecules/InformationForm/AboutMe";
import Education from "binar/components/molecules/InformationForm/Education";
import CertificateForm from "binar/components/molecules/InformationForm/CertificateForm";
import Skill from "binar/components/molecules/InformationForm/Skill";

const DataInformation: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    formSubmitted,
    setFormSubmitted,
    handleBack,
    handleNextTab,
  } = useTabContext();

  const getProgress = (activeTab: string) => {
    const tabIndex = tabs.findIndex((tab) => tab.key === activeTab) + 1;
    return (tabIndex / tabs.length) * 100;
  };

  const handleTabChange = (tab: string | null) => {
    setActiveTab(tab || "tab1");
  };

  const handleFormSubmit = (tab: string) => {
    setFormSubmitted((prevState) => ({
      ...prevState,
      [tab]: true,
    }));

    // Switch to the next tab
    handleNextTab(tab);
  };

  const tabs = [
    {
      key: "tab1",
      title: "Pengisian Data Diri",
      component: <PersonalData handleNext={() => handleFormSubmit("tab1")} />,
    },
    {
      key: "tab2",
      title: "Tentang Saya",
      component: (
        <AboutMe
          handleBack={handleBack}
          handleNext={() => handleFormSubmit("tab2")}
        />
      ),
    },
    {
      key: "tab3",
      title: "Pengalaman Kerja",
      component: (
        <WorkHistory
          handleBack={handleBack}
          handleNext={() => handleFormSubmit("tab3")}
        />
      ),
    },
    {
      key: "tab4",
      title: "Pendidikan",
      component: (
        <Education
          handleBack={handleBack}
          handleNext={() => handleFormSubmit("tab4")}
        />
      ),
    },
    {
      key: "tab5",
      title: "Sertifikat",
      component: (
        <CertificateForm
          handleBack={handleBack}
          handleNext={() => handleFormSubmit("tab5")}
        />
      ),
    },
    {
      key: "tab6",
      title: "Skill",
      component: (
        <Skill
          handleBack={handleBack}
          handleNext={() => handleFormSubmit("tab5")}
        />
      ),
    },
  ];

  const renderTabTitle = (title: string, isActive: boolean) => (
    <div css={{ display: "flex", alignItems: "center" }}>
      <div
        className="dot"
        css={{ backgroundColor: isActive ? theme.colors.primary : "#333" }}
      ></div>
      {title}
    </div>
  );

  return (
    <div>
      <div css={tabWrapperStyles}>
        <Tabs
          css={tabStyles}
          activeKey={activeTab}
          onSelect={handleTabChange}
          defaultActiveKey="tab1"
          variant="pills"
        >
          {tabs.map(({ key, title }) => (
            <Tab
              key={key}
              eventKey={key}
              title={renderTabTitle(title, activeTab === key)}
              disabled={!formSubmitted[key as keyof FormSubmittedState]}
            />
          ))}
        </Tabs>
      </div>
      <ProgressBar css={progressBarStyles} now={getProgress(activeTab)} />

      {tabs.map(({ key, component }) => (
        <div
          className="container position-relative"
          key={key}
          css={{ display: activeTab === key ? "block" : "none" }}
        >
          <div className={`${styledFormLayout}`}>{component}</div>
          {key !== "tab6" && key !== "tab1" && (
            <button
              className={`${styledUnderlineText} position-absolute`}
              css={{ top: "100px", right: 0 }}
              onClick={() =>
                handleTabChange(`tab${parseInt(key.substr(3)) + 1}`)
              }
              disabled={formSubmitted[key as keyof FormSubmittedState]}
            >
              <IconArrowRight style={{ fill: theme.colors.primary }} /> Lewati
              langkah ini
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default DataInformation;
