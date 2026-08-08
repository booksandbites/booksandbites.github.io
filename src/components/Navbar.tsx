import { A } from "@solidjs/router";
import styles from "./Navbar.module.css";
import np_logo from "../assets/np_logo.png";
import { Show } from "solid-js";
import { deviceStore } from "../store/deviceStore";

const Navbar = () => {
  return (
    <nav class={styles["nav"]}>
      <Show when={!deviceStore.isMobile}>
        <div class={styles["nav-left"]}>
          <img
            class={styles["nav-logo-img"]}
            src={np_logo}
            alt="Books & Bites logo"
          />
          <A class={styles["nav-logo"]} href="/">
            Books &amp; Bites
          </A>
        </div>
      </Show>

      <ul
        class={styles["nav-links"]}
        style={{
          "justify-content": deviceStore.isMobile ? "space-between" : "initial",
        }}
      >
        <li>
          <A href="/" end activeClass={styles["active-link"]}>
            {/* since "/" is in every route, only look at the end */}
            Home
          </A>
        </li>
        <li>
          <A href="/books" activeClass={styles["active-link"]}>
            Books
          </A>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
