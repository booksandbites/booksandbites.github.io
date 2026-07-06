import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import "./App.css";

function App() {
  return (
    <div style="display: flex; flex-direction: column; height: 100vh;">
      <Navbar />
      <div
        style="
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          box-sizing: border-box;"
      >
        <section class="hero">
          <div>
            <span class="hero-tag">Nonprofit · Literacy Education</span>
            <h1>
              Teaching literacy <em>bite</em> by <em>bite</em>.
            </h1>
            <p class="hero-sub">
              We believe reading is a right, not a privilege. Our free lessons
              help learners at every stage build confidence and skill.
            </p>
            <a href="lessons.html" class="btn">
              Browse Lessons
            </a>
            <a href="about.html" class="btn btn-outline">
              Our Mission
            </a>
          </div>
          <div class="logo-card">
            <img src="np_logo.png" alt="Books & Bites seal" />
            <span class="logo-name">Books &amp; Bites</span>
            <span class="logo-tagline">Book by book · Bite by bite</span>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
