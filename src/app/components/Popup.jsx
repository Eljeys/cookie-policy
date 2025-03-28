"use client";
import { useState } from "react";
import { FaCookieBite } from "react-icons/fa";
import CookieFooter from "./Footer";
import CookieHeader from "./Header";
const Popup = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  console.log(cookiesAccepted);
  return (
    !cookiesAccepted && (
      <section className="card">
        <CookieHeader />
        <CookieFooter
          cookiesAccepted={cookiesAccepted}
          setCookiesAccepted={setCookiesAccepted}
        />
      </section>
    )
  );
};

export default Popup;
