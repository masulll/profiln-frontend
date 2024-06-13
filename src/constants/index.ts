const theme = {
  colors: {
    primary: "#933393",
    success: "#0EAF59",
    error: "#DB2065",
    disabled: "#C2C2C2",
  },
  fonts: {
    heading: "Causten-Bold, sans-serif",
    body: "Causten, sans-serif",
    utility: "Open Sans, sans-serif",
  },
  text_colors: {
    dark: "#121212",
    disabled: "#A5A5A5",
    primary: "#933393",
    secondary: "#F99D1C",
    white: "#FFFFFF",
    body_copy_black: "#393939",
    body_copy_grey: "#696969",
  },
  neutral_colors: {
    grayscale_10: "#FFFFFF",
    grayscale_20: "#F5F5F5",
    grayscale_30: "#EDEDED",
    grayscale_40: "#E0E0E0",
    grayscale_50: "#C2C2C2",
    grayscale_60: "#9E9E9E",
    grayscale_70: "#757575",
    grayscale_80: "#616161",
    grayscale_90: "#404040",
    grayscale_100: "#0A0A0A",
  },
  hover_color: {
    primary: "#f2a0f2",
  },
} as const;

export enum LOCATION_TYPE {
  ON_SITE = "On - Site",
  REMOTE = "Remote",
  HYBRID = "Hybrid",
}

export enum JOB_TYPE {
  FULL_TIME = "Full-Time",
  PART_TIME = "Part-Time",
  CONTRACT = "Contract",
  FREELANCE = "Freelance",
  INTERNSHIP = "Internship",
  APPRENTICESHIP = "Apprenticeship",
  SEASONAL = "Seasonal",
}

export enum GENDER {
  PRIA = "Pria",
  WANITA = "Wanita",
}

export enum EDUCATION_LEVEL {
  SARJANA = "Sarjana S-1",
  MAGISTER = "Magister S-2",
  DOKTOR = "Doktor S-3",
  DIPLOMA4 = "Diploma IV",
  DIPLOMA3 = "Diploma III",
  DIPLOMA2 = "Diploma II",
  DIPLOMA1 = "Diploma I",
  SMA = "SMA",
  SMK = "SMK",
  SMP = "SMP",
  SD = "SD",
}

export default theme;
