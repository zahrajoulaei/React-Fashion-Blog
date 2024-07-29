import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <nav aria-label="Main Navigation" role="navigation">
          <ul className="menu-list-footer">
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
        </nav>
        <span> &copy; 2013 Zahra Joulaei</span>
      </footer>
    </>
  );
}
