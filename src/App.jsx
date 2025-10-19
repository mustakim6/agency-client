import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWorks from "./components/OurWorks";
import Teams from "./components/Teams";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const outlineRef = useRef(null);
  const dotRef = useRef(null);
  // mouse move tracking

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const hadleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", hadleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d( ${
          mouse.current.x - 6
        }px, ${mouse.current.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3d( ${
          position.current.x - 20
        }px, ${position.current.y - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", hadleMouseMove);
    };
  }, []);

  return (
    <div className="dark:bg-black">
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      <Hero></Hero>
      <TrustedBy></TrustedBy>
      <Services></Services>
      <OurWorks></OurWorks>
      <Teams></Teams>
      <ContactUs></ContactUs>
      <Footer theme={theme}></Footer>

      {/* custom cursor */}

      <div
        ref={outlineRef}
        className="fixed h-10 w-10 top-0 left-0 rounded-full border border-primary pointer-events-none z-[9999] " style={{transition: 'transform 0.1s ease-out'}}
      ></div>

      <div
        ref={dotRef}
        className="fixed h-3 w-3 top-0 left-0 rounded-full pointer-events-none z-[9999] bg-cyan-400"
      ></div>



    </div>
  );
}

export default App;
