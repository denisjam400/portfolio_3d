import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
  InProgress,
} from "./Components/index.js";

// free 3D model site : Sketchfab.com

function App() {
  return (
    <main className="relative z-0 bg-primary">
      <header className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </header>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <InProgress />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </main>
  );
}

export default App;
