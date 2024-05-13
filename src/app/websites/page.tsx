"use client";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { StyleProvider } from "../../contexts/StyleContext";
import "../../containers/Main.scss";
import WebsiteContainer from "@/containers/websiteContainer/websiteContainer";

export default function WebsitesPage() {
  const [isDark, setIsDark] = useState(true);
  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <div className={isDark ? "dark-mode" : ""}>
        <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
          <Header />
          <WebsiteContainer />
          <Footer />
        </StyleProvider>
      </div>
    </>
  );
}
