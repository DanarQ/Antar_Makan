import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <h1>ANTAR MAKAN</h1>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
