import Hero from './Hero';
import Marquee from './Marquee';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

import Education from './Education';

export default function Home() {
  return (
    <main>
      <div className="container">
        <Hero />
      </div>
      
      <div className="container">
        <About />
        <Education />
        <Skills />
        <Projects />
      </div>

      <Marquee />
      
      <div className="container">
        <Contact />
      </div>
    </main>
  );
}
