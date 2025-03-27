"use client";
import { FaCookieBite } from "react-icons/fa";
const Popup = () => {
  return (
    <section className="card">
      <div>
        <div>
          <FaCookieBite />
        </div>
        <p>We use cookies to improve your user experience</p>
      </div>
      <button>I like Cookies</button>
    </section>
  );
};

export default Popup;
