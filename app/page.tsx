//import NavbarLayout from "../component/navlayout/navlayout";

// page.tsx
import Navbar from "../component/navbar/navbar";
import HomePage from "./homepage/homepage";
import Project from "./allPages/project/page";
import ExpertisePage from "./allPages/expertise/page";
import About from "./allPages/about/page";
import Contact from "./allPages/contact/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <HomePage />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="expertise">
        <ExpertisePage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

/*
    <NavbarLayout>
      <HomePage />
    </NavbarLayout>*/
