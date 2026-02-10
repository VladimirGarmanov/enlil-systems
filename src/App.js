import React from "react";

// HERO: две разные картинки
import heroDesktop from "./assets/hero_desktop.jpg";
import heroMobile from "./assets/hero_mobile.jpg";

// Demo медиа
import demoVideo from "./assets/landing.mp4";
import dronePhoto from "./assets/drone.png";
import toroidalModel from "./assets/toroidal.png";
import stationPhoto from "./assets/dock.jpg";

// Vision (оставляем)
import visionImage from "./assets/vision.jpg";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <i className={`fa-solid ${icon}`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="hero-content">
      <h1>Enlil Systems</h1>

      <p className="hero-subtitle">
        Autonomous hexacopter with precision landing and magnetic charging dock.
      </p>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-value">20 km</div>
          <div className="hero-stat-label">RANGE</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-value">5 kg</div>
          <div className="hero-stat-label">PAYLOAD</div>
        </div>
      </div>

      <div className="hero-actions">
        <a href="#demo" className="cta-button">Watch demo</a>
        <a href="#contact" className="ghost-button">Contact</a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <>
      {/* DESKTOP HERO */}
      <section className="hero hero-desktop" style={{ backgroundImage: `url(${heroDesktop})` }}>
        <div className="hero-overlay" />
        <HeroContent />
      </section>

      {/* MOBILE HERO */}
      <section className="hero hero-mobile" style={{ backgroundImage: `url(${heroMobile})` }}>
        <div className="hero-overlay" />
        <HeroContent />
      </section>
    </>
  );
}

function Features() {
  const features = [
    {
      icon: "fa-route",
      title: "Range & payload",
      description:
        "Up to 20 km range and up to 5 kg payload (depends on conditions and mission profile).",
    },
    {
      icon: "fa-camera",
      title: "Vision landing (ArUco)",
      description:
        "Precision landing using onboard camera and ArUco markers for repeatable docking.",
    },
    {
      icon: "fa-magnet",
      title: "Magnetic alignment & charging",
      description:
        "Magnets help alignment on the dock; charging happens through contact pads with BMS/charge control.",
    },
    {
      icon: "fa-wifi",
      title: "No continuous link required",
      description:
        "Mission uploads while on dock; flight runs автономно by GPS. Internet isn't required all the time.",
    },
  ];

  return (
    <section className="features" id="features">
      <h2>Highlights</h2>
      <div className="feature-grid">
        {features.map((f) => (
          <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
        ))}
      </div>
    </section>
  );
}

function Demo() {
  return (
    <section className="demo" id="demo">
      <h2>Demo</h2>
      <p className="demo-subtitle">See our autonomous landing and charging prototype in action.</p>

      <div className="demo-grid">
        <div className="demo-card">
          <div className="demo-media">
            <video className="demo-video" src={demoVideo} controls playsInline />
          </div>
          <div className="demo-caption">
            Autonomous landing on the dock — camera + ArUco + magnetic alignment.
          </div>
        </div>

        <div className="demo-card">
          <div className="demo-media">
            <img className="demo-img" src={dronePhoto} alt="Hexacopter prototype" />
          </div>
          <div className="demo-caption">Prototype hexacopter.</div>
        </div>

        <div className="demo-card">
          <div className="demo-media">
            <img className="demo-img" src={toroidalModel} alt="Toroidal propellers (3D model)" />
          </div>
          <div className="demo-caption">
            Toroidal propellers — experiments in progress.
          </div>
        </div>

        <div className="demo-card">
          <div className="demo-media">
            <img className="demo-img" src={stationPhoto} alt="Charging dock station" />
          </div>
          <div className="demo-caption">Low-cost charging dock station (prototype). The ArUco marker plate is normally mounted inside the dock, but it was lost during field testing, but new markers haven’t been installed yet.</div>
        </div>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section className="vision" id="vision">
      <img src={visionImage} alt="Vision" className="vision-img" />
      <div className="vision-content">
        <h2>Vision</h2>
        <p>
          We focus on reliable landing + charging first. Battery swap and toroidal propellers are currently in development.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <h2>Contact</h2>
      <p>For demos or partnerships:</p>
      <a className="contact-button" href="mailto:vladimirgarmanov29@gmail.com">
        Contact the head of our team
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <Features />
      <Demo />
      <Vision />
      <Footer />
    </>
  );
}