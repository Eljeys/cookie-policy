"use client";
import { useState } from "react";
import { FaCookieBite } from "react-icons/fa";
const Popup = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  console.log(cookiesAccepted);
  return (
    !cookiesAccepted && (
      <section className="card">
        <header>
          <FaCookieBite size={45} />
        </header>
        <p>We use cookies to improve your user experience</p>
        <footer className="button-wrapper">
          <button onClick={() => setCookiesAccepted(!cookiesAccepted)}>
            I like Cookies
          </button>
        </footer>
      </section>
    )
  );
};

export default Popup;
