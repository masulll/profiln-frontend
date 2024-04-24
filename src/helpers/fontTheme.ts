import localFont from "next/font/local";

const causten = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Causten-Semi-Bold.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Causten-Semi-Bold.ttf",
      weight: "600",
      style: "semi-bold",
    },
    {
      path: "../../public/assets/fonts/Causten-Semi-Bold.ttf",
      weight: "400",
      style: "bold",
    },
  ],
  variable: "--font-Causten",
});

export { causten };