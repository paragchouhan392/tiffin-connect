import { Header } from "../../component/Header";
import "./Homepage.css";

export function HomePage() {
  return (
    <>
      <Header />
      <main className="tc-hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />

        <div className="hero-inner">
          <div className="hero-text">
            <h1>
              Get <span className="accent">Homely Meals</span> at
              <br />
              Your Doorstep
            </h1>
            <p className="lead">
              Connect with local tiffin services for fresh, home-style meals
              delivered daily to students, professionals, and families.
            </p>

            <div className="hero-actions">
              <button className="btn primary">
                Explore Tiffins <span className="arrow">→</span>
              </button>
              <button className="btn outline">Become a Vendor</button>
            </div>

            <div className="search-wrap">
              <div className="search-box">
                <span className="loc-icon">📍</span>
                <input type="text" placeholder="Enter your location" />
                <button className="search-btn">Search</button>
              </div>
            </div>
          </div>
        </div>
        {/* Features / Why Choose Our Network section */}
        <section className="tc-features">
          <div className="features-inner">
            <h2 className="features-title">
              Why Choose <span>Our Network</span>?
            </h2>
            <p className="features-sub">
              We bridge the gap between food lovers and talented home chefs
            </p>

            <div className="features-grid">
              <article className="feature-card">
                <div className="feature-icon">🍽️</div>
                <h3>Homemade Quality</h3>
                <p>
                  Enjoy freshly prepared, home-cooked meals made with love and
                  traditional recipes
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">⏰</div>
                <h3>Daily Delivery</h3>
                <p>
                  Reliable daily tiffin service delivered hot and fresh to your
                  doorstep on time
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3>Verified Providers</h3>
                <p>
                  All tiffin centers are verified with quality checks and
                  customer reviews
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">📈</div>
                <h3>Grow Your Business</h3>
                <p>
                  Tiffin providers can reach more customers and grow their
                  business effortlessly
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
