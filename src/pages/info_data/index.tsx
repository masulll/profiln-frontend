import React, { useState } from "react";
import { Tab, Tabs, ProgressBar } from "react-bootstrap";

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
  const [activeTab, setActiveTab] = useState("tab2");
  const tabs = [
    { key: "tab1", title: "Pengisian Data Diri", component: <PersonalData /> },
    { key: "tab2", title: "Tentang Saya", component: <AboutMe /> },
    { key: "tab3", title: "Pengalaman Kerja", component: <WorkHistory /> },
    { key: "tab4", title: "Pendidikan", component: <Education /> },
    { key: "tab5", title: "Sertifikat", component: <CertificateForm /> },
    { key: "tab6", title: "Skill", component: <Skill /> },
  ];
  const [formSubmitted, setFormSubmitted] = useState({
    tab1: false,
    tab2: false,
    tab3: false,
    tab4: false,
    tab5: false,
    tab6: false,
  });

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
    const nextTabIndex = parseInt(tab.substr(3)) + 1;
    setActiveTab(`tab${nextTabIndex} `);
  };

  const handleBack = (tab: string) => {
    const backTabIndex = parseInt(tab.substr(3)) - 1;
    setActiveTab(`tab${backTabIndex}`);
  };

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
