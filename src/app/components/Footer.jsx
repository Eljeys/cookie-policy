"use client";

const CookieFooter = ({ cookiesAccepted, setCookiesAccepted }) => {
  return (
    <footer className="button-wrapper">
      <p>We use cookies to improve your user experience</p>
      <button onClick={() => setCookiesAccepted(!cookiesAccepted)}>
        I like Cookies
      </button>
    </footer>
  );
};

export default CookieFooter;
