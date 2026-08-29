import generalCss from "./General.module.css";
import group from "../assets/pictures/movie-night/group.jpg";
import activities from "../assets/pictures/movie-night/activities.jpg";
import activities2 from "../assets/pictures/movie-night/activities2.jpg";
import watching from "../assets/pictures/movie-night/watching.jpg";

const BitesPage = () => {
  return (
    <>
      <h1 class={generalCss.title}>Bites</h1>
      <div class={generalCss.body}>
        <p>
          We are committed to eliminating food insecurity throughout our local
          communities! Donations often flood in during seasons of giving, like
          Thanksgiving or Christmas, though many people neglect the rest of the
          year. Those in need of food require donations year round and our goal
          is to raise awareness for food insecurity while doing our part to
          donate consistently!
        </p>
        <br />
        <p>
          One of the main ways we obtain funds are through&mdash;you guessed
          it&mdash; fundraisers!
        </p>
        <p>
          Below are some pictures from our most recent one
          {/*. It was a movie
          showing where the audience watched the movie of the book the book club
          has been reading*/}
        </p>
        <div class={generalCss.gallery}>
          <img src={group} />
          <img src={activities} />
          <img src={activities2} />
          <img src={watching} />
        </div>
      </div>
    </>
  );
};

export default BitesPage;
