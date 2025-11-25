import { useNavigate } from "react-router-dom";
import { Header } from "../../component/Header";
import "./AboutPage.css";

export function AboutPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section className="about-section">
        <h1 className="about-heading">About Tiffin Connect</h1>
        <p className="about-subtitle">
          Healthy & Affordable Home-Style Meals At Your Doorstep
        </p>

        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Tiffin Connect was created with one mission — to make daily meals
              healthy, affordable, and accessible for students, working
              professionals, and families who stay away from home. We connect
              users with trusted and verified tiffin providers who deliver
              hygienic, home-cooked food every day.
            </p>

            <h2>Our Mission</h2>
            <p>
              To ensure that no one compromises on health because of location or
              lifestyle. We aim to build India’s most trusted meal-delivery
              ecosystem powered by transparency, real reviews and seamless
              convenience.
            </p>

            <h2>Why Choose Us?</h2>
            <ul className="about-list">
              <li>🍲 Pure homemade meals from verified kitchens</li>
              <li>🧼 Fresh, hygienic and clean packaging</li>
              <li>💸 Affordable pricing with daily & monthly plans</li>
              <li>⭐ Genuine reviews from real users</li>
              <li>🌱 Options like Veg, Jain, High-Protein, Vegan & more</li>
            </ul>

            <div className="about-stats">
              <div className="stat-box">
                <h3>500+</h3>
                <p>Happy Users</p>
              </div>
              <div className="stat-box">
                <h3>40+</h3>
                <p>Verified Kitchens</p>
              </div>
              <div className="stat-box">
                <h3>10k+</h3>
                <p>Meals Delivered</p>
              </div>
            </div>

            <button
              onClick={() => navigate("/discover-tiffin")}
              className="about-cta"
            >
              Explore Tiffin Services
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
