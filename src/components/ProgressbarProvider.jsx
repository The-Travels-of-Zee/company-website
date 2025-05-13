"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
const ProgressbarProvider = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar height="4px" color="#39A9DB" options={{ showSpinner: false }} shallowRouting />
    </>
  );
};

export default ProgressbarProvider;
