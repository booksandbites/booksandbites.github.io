import { A } from "@solidjs/router";
import np_logo from "../assets/np_logo.png";

function App() {
  return (
    <>
      <section class="hero">
        <div>
          <h1>
            Teaching literacy <em>bite</em> by <em>bite</em>.
          </h1>
          <p class="hero-sub">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
            consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
            quisque faucibus ex sapien vitae pellentesque.
          </p>
          <A href="/lessons" class="btn">
            Browse Lessons
          </A>
          <A href="/about" class="btn btn-outline">
            Our Mission
          </A>
        </div>
        <div class="logo-card">
          <img src={np_logo} alt="Books & Bites seal" />
          <span class="logo-name">Books &amp; Bites</span>
          <span class="logo-tagline">Book by book · Bite by bite</span>
        </div>
      </section>
    </>
  );
}

export default App;
