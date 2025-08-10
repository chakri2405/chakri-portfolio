tsParticles.load("particles-js", {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  particles: {
    number: {
      value: 20,
      density: { enable: true, area: 800 }
    },
    color: { value: "#00cfff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.9,
      random: false
    },
    size: {
      value: 4,
      random: true
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      random: false,
      straight: false,
      outModes: "out"
    },
    links: {
      enable: true,
      distance: 130,
      color: "#00cfff",
      opacity: 0.3,
      width: 1
    }
  },
  interactivity: {
    events: {
      onHover: { enable: false },
      onClick: { enable: false },
      resize: true
    }
  },
  detectRetina: true
});
