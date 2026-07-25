import { render } from "solid-js/web";
import "./index.css";
import { HashRouter, Route } from "@solidjs/router";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

import Home from "./views/Home.tsx";
import AboutPage from "./views/AboutPage.tsx";
import BitesPage from "./views/BitesPage.tsx";
import BooksPage from "./views/BooksPage.tsx";
import LessonPage from "./views/LessonsPage.tsx";
import SecretPage from "./views/SecretPage.tsx";

const root = document.getElementById("root");

const RootLayout = (props: { children?: any }) => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap"
      rel="stylesheet"
    />
    <div style="display: flex; flex-direction: column; min-height: 100vh;">
      <Navbar />
      <div
        style="
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 20px;
        box-sizing: border-box;"
      >
        {props.children}
      </div>
      <Footer />
    </div>
  </>
);

render(
  () => (
    <HashRouter>
      <Route component={RootLayout}>
        <Route path="/" component={() => <Home />} />
        <Route path="/about" component={() => <AboutPage />} />
        <Route path="/bites" component={() => <BitesPage />} />
        <Route path="/books" component={() => <BooksPage />} />
        <Route path="/lessons" component={() => <LessonPage />} />
        <Route path="/secret" component={() => <SecretPage />} />
      </Route>
    </HashRouter>
  ),
  root!,
);
