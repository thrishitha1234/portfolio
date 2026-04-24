import { Suspense, useEffect, useState } from 'react';
import Scene from './components/Scene';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize to -1 to 1 for WebGL
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      {/* Fixed 3D Background */}
      <div className="canvas-container">
        <Suspense fallback={null}>
          <Scene mousePosition={mousePosition} />
        </Suspense>
      </div>

      {/* Foreground Content */}
      <div className="content-wrapper">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
