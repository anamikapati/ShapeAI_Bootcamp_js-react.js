import React from "react";

function Footer() {
  var present_Year = new Date().getFullYear();
  return (
    <footer>
      <p> Copyright @ {present_Year} </p>
    </footer>
  );
}

export default Footer;
