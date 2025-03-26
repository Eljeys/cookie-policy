"use client";
import { FaCookieBite } from "react-icons/fa";

const Popup = () => {
  return (
    <div className="card">
      <div>
        <div>
          <FaCookieBite />
        </div>
        <p>We use cookies to improve your user experience</p>
      </div>
      <button>I like Cookies</button>
    </div>
  );
};

export default Popup;
