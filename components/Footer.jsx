import React from "react";

function Footer() {
  return (
    <footer>
      <nav aria-label="Main Navigation" role="navigation">
        <ul className="footerNav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Women's</a>
          </li>
          <li>
            <a href="#">Men's</a>
          </li>
          <li>
            <a href="#">On the Street</a>
          </li>
          <li>
            <a href="#">The Catwalk</a>
          </li>
          <li>
            <a href="#">AdWatch</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Tips</a>
          </li>
        </ul>
        <p>&copy; Valet industries Inc</p>
      </nav>
    </footer>
  );
}

export default Footer;