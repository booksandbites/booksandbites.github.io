const Navbar = () => {
  return (
    <nav>
      <div class="nav-left">
        <img class="nav-logo-img" src="np_logo.png" alt="Books & Bites logo" />
        <a class="nav-logo" href="index.html">
          Books &amp; Bites
        </a>
      </div>
      <ul class="nav-links">
        <li>
          <a href="index.html" class="active">
            Home
          </a>
        </li>
        <li>
          <a href="books.html">Books</a>
        </li>
        <li>
          <a href="bites.html">Bites</a>
        </li>
        <li>
          <a href="about.html">Mission</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
