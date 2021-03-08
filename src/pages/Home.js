import React from "react";
import Locations from "../components/Locations";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <button className="cta">Cafe Latte</button>
      </section>
      <section className="locations">
        <Locations />
      </section>
    </main>
  );
}

export default Home;
