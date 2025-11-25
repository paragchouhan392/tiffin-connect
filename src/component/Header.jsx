import "./Header.css";

export function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <img src="/images/logo.png" alt="App Logo" className="app-logo" />
      </div>

      <nav className="header-centre">
        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/discover-tiffin">Discover Tiffins</a>
          </li>
          <li>
            <a href="/subscriptions-page">Subscription</a>
          </li>
          <li>
            <a href="/about-page">About Us</a>
          </li>
        </ul>
      </nav>

      <div className="header-right">
        <button className="sign-in-btn">Sign In</button>
        <button className="get-started-btn">Get Started</button>
      </div>
    </header>
  );
}
