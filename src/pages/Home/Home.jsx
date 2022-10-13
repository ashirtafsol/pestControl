import React from "react";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import PestBio from "../../components/Pest Bio/PestBio";
import PestControl from "../../components/Pest Control/PestControl";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <div>
      <section>
        <HeroSection />
      </section>

      <section>
        <Contact />
      </section>

      <section>
        <PestControl />
      </section>

      <section>
        <PestBio />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
