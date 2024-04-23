import React from "react";
import { causten } from "binar/helpers/fontTheme";
type AppShellProps = {
  children: React.ReactNode;
};

const Layouts = (props: AppShellProps) => {
  const { children } = props;
  return <main className={`${causten.className}`}>{children}</main>;
};

export default Layouts;
