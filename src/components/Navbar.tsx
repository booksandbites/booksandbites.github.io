import { A } from "@solidjs/router";
import np_logo from "../assets/np_logo.png";

const Navbar = () => {
  return (
    <nav>
      <div class="nav-left">
        <img class="nav-logo-img" src={np_logo} alt="Books & Bites logo" />
        <A class="nav-logo" href="/">
          Books &amp; Bites
        </A>
      </div>
      <ul class="nav-links">
        <li>
          <A href="/" end>
            {/* since "/" is in every route, only look at the end */}
            Home
          </A>
        </li>
        <li>
          <A href="/books">Books</A>
        </li>
        <li>
          <A href="/bites">Bites</A>
        </li>
        <li>
          <A href="/about">Mission</A>
        </li>
        <li>
          <A href="/lessons">Lessons</A>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
