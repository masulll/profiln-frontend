import React, { useState } from "react";
import { Tab, Tabs, ProgressBar } from "react-bootstrap";
import { css } from "@emotion/react";
import InfoDataForm from "binar/components/organisms/InfoDataForm";
import theme from "binar/constants";
import { IconArrowRight } from "binar/helpers";
import {
  styledFormLayout,
  styledUnderlineText,
} from "binar/styles/emotion/DataForm.style";

const tabStyles = css`
  .nav-link {
    padding: 1rem 2rem;
    color: ${theme.colors.disabled};
    font-weight: bold;
    background-color: transparent;
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .nav-link.active {
    color: ${theme.colors.primary};
    background-color: transparent;
  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: ${theme.colors.disabled};
    border-radius: 50%;
    margin-right: 8px;
  }

  .nav-link.active .dot {
    background-color: ${theme.colors.primary};
  }
`;

const progressBarStyles = css`
  height: 5px;
  margin-top: 1rem;
  .progress-bar {
    background-color: ${theme.colors.primary};
  }
`;

const tabWrapperStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const DataInformation: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [formSubmitted, setFormSubmitted] = useState({
    tab1: false,
    tab2: false,
    tab3: false,
    tab4: false,
    tab5: false,
    tab6: false,
  });

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
    setActiveTab(`tab${nextTabIndex}`);
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
          <Tab
            eventKey="tab1"
            title={renderTabTitle("Pengisian Data Diri", activeTab === "tab1")}
            disabled={!formSubmitted.tab1}
          />
          <Tab
            eventKey="tab2"
            title={renderTabTitle("Tentang Saya", activeTab === "tab2")}
            disabled={!formSubmitted.tab1}
          />
          <Tab
            eventKey="tab3"
            title={renderTabTitle("Pengalaman Kerja", activeTab === "tab3")}
            disabled={!formSubmitted.tab2}
          />
          <Tab
            eventKey="tab4"
            title={renderTabTitle("Pendidikan", activeTab === "tab4")}
            disabled={!formSubmitted.tab3}
          />
          <Tab
            eventKey="tab5"
            title={renderTabTitle("Sertifikat", activeTab === "tab5")}
            disabled={!formSubmitted.tab4}
          />
          <Tab
            eventKey="tab6"
            title={renderTabTitle("Skill", activeTab === "tab6")}
            disabled={!formSubmitted.tab5}
          />
        </Tabs>
      </div>
      <ProgressBar
        css={progressBarStyles}
        now={
          activeTab === "tab1"
            ? 16.6
            : activeTab === "tab2"
            ? 33.3
            : activeTab === "tab3"
            ? 49.9
            : activeTab === "tab4"
            ? 66.5
            : activeTab === "tab5"
            ? 83.1
            : 100
        }
      />
      {activeTab === "tab1" && (
        <div className="container position-relative">
          <div className={`${styledFormLayout}`}>
            <InfoDataForm />
          </div>
          <button
            className={`${styledUnderlineText} position-absolute`}
            style={{ top: "100px", right: "100px" }}
            onClick={() => setActiveTab("tab2")}
            disabled={!formSubmitted.tab1} // Disable button if form not submitted
          >
            <IconArrowRight style={{ fill: theme.colors.primary }} /> Lewati
            langkah ini
          </button>
        </div>
      )}
      {/* Add similar conditional rendering for other tabs */}
    </div>
  );
};

export default DataInformation;
