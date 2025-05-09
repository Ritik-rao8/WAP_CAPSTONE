import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./HomePage.css"
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function HomePage() {
  const features = [
    {
      title: "Free Shipping",
      description: "Free shipping on all orders over $50"
    },
    {
      title: "Easy Returns",
      description: "30-day return policy for all items"
    },
    {
      title: "Best Prices",
      description: "Competitive prices on all our products"
    },
    {
      title: "24/7 Support",
      description: "Customer support available around the clock"
    }
  ];

  const categories = [
    {
      name: "Electronics",
      image: "https://img.freepik.com/premium-photo/assortment-modern-tech-devices-laid-out-blue-background_14117-738152.jpg",
      link: "../ProductPage"
    },
    {
      name: "Jewelry",
      image: "https://www.giva.co/cdn/shop/articles/679-min.jpg?v=1713267383",
      link: "../ProductPage"
    },
    {
      name: "Men's Clothing",
      image: "https://www.stitchfix.com/men/blog/wp-content/uploads/2022/03/22-01-20_Set_B_M_SLD-GRID_v1_1x1-936x468.jpeg",
      link: "../ProductPage"
    },
    {
      name: "Women's Clothing",
      image: "https://st3.depositphotos.com/8640372/33936/i/450/depositphotos_339361514-stock-photo-set-with-fashionable-womens-clothing.jpg",
      link: "../ProductPage"
    }
  ];

  return (
    <div className="home-page">
      <Navbar />

      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Shop the Latest Trends</h1>
            <p className="hero-subtitle">
              Discover our curated collection of high-quality products at unbeatable prices.
            </p>
            <div className="hero-buttons">
              <Link href="../ProductPage">
                <button className="btn btn-primary">
                  Next Mart <span className="arrow-icon">→</span>
                </button>
              </Link>
              <Link href="../AboutPage">
                <button className="btn btn-secondary">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img
              className="hero-image"
              src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-abe0-61f8-b2d8-47be9776b111/raw?se=2025-05-08T12%3A23%3A17Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=30ec2761-8f41-44db-b282-7a0f8809659b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T10%3A23%3A05Z&ske=2025-05-09T10%3A23%3A05Z&sks=b&skv=2024-08-04&sig=Z7TJchPgbFz7fLRVTQ9nF8PsJCuy6FalubUo/yuARvU%3D"
              alt="Hero shopping image"
            />
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <h2 className="features-title">Why Shop With Us</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-card-body">
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon-circle" />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="category-section">
        <div className="category-container">
          <h2 className="category-title">Shop by Category</h2>
          <div className="category-grid">
            {categories.map((category, index) => (
              <div className="category-item" key={index}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
                <Link href={category.link} className="category-button">
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}