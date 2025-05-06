import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the content of the home page.</p>
        <p>Here you can add more information about your application.</p>
        <p>Feel free to customize this page as needed.</p>
      </div>
      <Footer />
    </div>
  );
}