import React from "react";

// Импорт медиа: изображения, видео и логотип. Все файлы должны
// находиться в папке src/assets.
import heroImage from "./assets/hero.jpg";
import visionImage from "./assets/vision.png";
import dronePhoto from "./assets/drone.png";
import demoVideo from "./assets/landing.mp4";
import vidImage from './assets/start_vid.jpg'
import logo from "./assets/logo.png";

// Универсальная карточка для основных характеристик/фишек.
function Card({ icon, title, description }) {
  return (
    <div className="card">
      <i className={`fa-solid ${icon}`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Карточка для экспериментальных направлений.
function ExperimentCard({ icon, title, description, status }) {
  return (
    <div className="experiment-card">
      <i className={`fa-solid ${icon}`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="experiment-status">{status}</div>
    </div>
  );
}

// Шапка с героем и ключевым предложением.
function Hero() {
  return (
    <header className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay">
        <div className="hero-inner">
          <h1>Enlil Systems</h1>
          <p className="tagline">
            Autonomous hexacopter with precision landing and magnetic charging dock.
          </p>
          <div className="stats">
            <div className="stat">
              <span className="value">20&nbsp;km</span>
              <span className="label">range</span>
            </div>
            <div className="stat">
              <span className="value">5&nbsp;kg</span>
              <span className="label">payload</span>
            </div>

          </div>
          <div className="hero-actions">
            <a href="#media" className="cta-button">Watch demo</a>
            <a href="#contact" className="ghost-button">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}

// Основные особенности устройства.
function Highlights() {
  const items = [
    {
      icon: "fa-wifi",
      title: "Mission autonomy",
      description:
        "Mission is uploaded while the drone charges; flight continues on GPS without a constant link.",
    },
    {
      icon: "fa-crosshairs",
      title: "Precision landing",
      description:
        "On-board vision with ArUco markers guides a soft touchdown. Magnets align and secure the connection.",
    },
    {
      icon: "fa-bolt",
      title: "Magnetic charging",
      description:
        "Low‑cost dock with contact pads and BMS module recharges the pack automatically between missions.",
    },
    {
      icon: "fa-route",
      title: "Range & payload",
      description:
        "Up to 20 km range carrying up to 5 kg (depending on load and conditions).",
    },
  ];
  return (
    <section className="highlights" id="highlights">
      <h2>Highlights</h2>
      <div className="card-grid">
        {items.map(({ icon, title, description }) => (
          <Card key={title} icon={icon} title={title} description={description} />
        ))}
      </div>
    </section>
  );
}

// Блок для экспериментальных направлений: батарея и тороидальные пропеллеры.
function Experiments() {
  const experiments = [
    {
      icon: "fa-battery-half",
      title: "Battery swap module",
      description:
        "Side-access tray with linear actuators to remove and insert the pack for rapid turnaround.",
      status: "In development",
    },
    {
      icon: "fa-fan",
      title: "Toroidal propellers",
      description:
        "Testing toroidal propeller designs to reduce noise and improve efficiency. These new shapes spread vortices over the whole propeller, lowering sound levels.",
      status: "Experimental",
    },
  ];
  return (
    <section className="experiments" id="experiments">
      <h2>R&D Focus</h2>
      <div className="experiment-grid">
        {experiments.map(({ icon, title, description, status }) => (
          <ExperimentCard
            key={title}
            icon={icon}
            title={title}
            description={description}
            status={status}
          />
        ))}
      </div>
    </section>
  );
}

// Секция с демонстрационными материалами: видео и фото.
function Media() {
  return (
    <section className="media" id="media">
      <div className="media-header">
        <h2>Demo</h2>
        <p>See our autonomous landing and charging prototype in action.</p>
      </div>
      <div className="media-grid">
        <div className="media-item">
          <video
            src={demoVideo}
            controls
            loop
            muted
            poster={vidImage}
            className="media-video"
          />
          <div className="media-caption">
            Autonomous landing on the dock — camera + ArUco + magnetic alignment.
          </div>
        </div>
        <div className="media-item">
          <img src={dronePhoto} alt="Drone on dock" className="media-photo" />
          <div className="media-caption">Prototype hexacopter and low‑cost dock.</div>
        </div>
      </div>
    </section>
  );
}

// Видение развития проекта.
function Vision() {
  return (
    <section className="vision" id="vision">
      <img src={visionImage} alt="Future dock concept" className="vision-img" />
      <div className="vision-content">
        <h2>Vision</h2>
        <p>
          Today, we’re perfecting reliable landing and charging. Next, we’re
          building a modular battery swap system and experimenting with
          toroidal propellers to reduce noise. In the long run, we envision
          networks of self‑service docks enabling continuous, human‑free
          operations.
        </p>
      </div>
    </section>
  );
}

// Контакты и дополнительная информация.
function Footer() {
  return (
    <footer className="footer" id="contact">
      <h2>Contact</h2>
      <p>
        Reach out for more information, demos or partnership opportunities.
      </p>
      <a href="mailto:info@enlil-systems.com" className="contact-button">
        info@enlil-systems.com
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <Highlights />
      <Experiments />
      <Media />
      <Vision />
      <Footer />
    </>
  );
}