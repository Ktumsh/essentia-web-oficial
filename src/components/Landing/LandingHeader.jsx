import { useEffect, useRef, useState } from "react";

const LandingHeader = () => {
  const [isChanged, setIsChanged] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 640);
  const [activeSection, setActiveSection] = useState("");
  const vh = window.innerHeight / 1.4;
  const restringedPaths = ["/login", "/signup"];

  const isRestringedPath = () => {
    return restringedPaths.includes(window.location.pathname);
  };

  const headerRef = useRef(null);

  const sections = [
    { id: "nuestros_recursos", label: "Nuestros recursos" },
    { id: "nuestro_metodo", label: "Nuestro método" },
    { id: "noticias_al_dia", label: "Noticias al día" },
    { id: "essentia_ai", label: "Essentia AI" },
    { id: "todo_y_mas", label: "Más" },
  ];

  const checkScreenSizeAndUpdateNavbar = () => {
    const scrollTop = window.scrollY;

    if (isLargeScreen) {
      if (scrollTop > vh && !isChanged) {
        setIsChanging(true);
        setTimeout(() => {
          setIsChanged(true);
          setIsChanging(false);
        }, 150); // Duración de la transición
      } else if (scrollTop <= vh && isChanged) {
        setIsChanging(true);
        setTimeout(() => {
          setIsChanged(false);
          setIsChanging(false);
        }, 150); // Duración de la transición
      }
    } else {
      setIsChanged(false);
      setIsChanging(false);
    }
  };

  const handleSetActiveLink = () => {
    const sections = document.querySelectorAll("section");
    if (sections.length === 0) {
      setActiveSection("");
      return;
    }

    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    if (index >= 0 && sections[index]) {
      setActiveSection(sections[index].id);
    }
  };

  const handleSmoothScroll = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      checkScreenSizeAndUpdateNavbar();
      handleSetActiveLink();
    };

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 640);
      checkScreenSizeAndUpdateNavbar();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleSetActiveLink();
    checkScreenSizeAndUpdateNavbar();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isChanged, isLargeScreen]);

  return (
    <header
      ref={headerRef}
      id="header"
      className={`static md:fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isRestringedPath() ? "md:absolute" : ""
      }`}
    >
      <nav
        id="nav"
        className={`px-5 shadow-[0_2px_4px_0_rgba(0,0,0,.15)] items-center flex justify-between text-base-color z-50 transition-all duration-300 ease-in-out ${
          isChanged
            ? "bg-bento-gradient backdrop-blur-2xl text-base-color-h"
            : "bg-white sm:mx-5 sm:my-2 sm:rounded-xl"
        }`}
      >
        <div
          className={`flex items-center w-full h-16 gap-0 sm:gap-3 ${
            isChanged ? "justify-center md:justify-between" : "justify-between"
          }`}
        >
          <div
            id="nav_links"
            className={`flex text-base font-light whitespace-nowrap transition-opacity duration-150 ${
              isChanging ? "opacity-0" : "opacity-100"
            }`}
          >
            {isChanged && !isRestringedPath() ? (
              sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`nav_link drop-shadow-[0_1px_2px_rgba(0,0,0,.2)] hover:drop-shadow-[0_1px_2px_rgba(0,_0,_0,_0)] font-medium hover:text-transparent after:hover:bg-transparent hover:bg-light-gradient bg-clip-text hover:scale-105  after:hover:bg-light-gradient mr-5 px-2 transition-transform duration-100 ${
                    activeSection === section.id ? "active" : ""
                  }`}
                  onClick={(e) => handleSmoothScroll(e, section.id)}
                >
                  {section.label}
                </a>
              ))
            ) : (
              <a
                className="font-grotesk font-normal active:scale-95 overflow-hidden transition-transform relative items-center rounded-full inline-flex gap-2"
                href="/"
              >
                <img
                  className="text-sm me-0 w-10 h-10 flex origin-center transition-all ease-in-out"
                  src="/e-logomark-on-light.webp"
                  alt="Logo de Essentia"
                />
                <span className="not-sr-only">Essentia®️</span>
              </a>
            )}
          </div>
          <div
            id="nav_btns"
            className={`items-center text-base font-normal inline-flex transition-opacity duration-150 ${
              isChanging || isChanged
                ? "opacity-0 pointer-events-none "
                : "opacity-100"
            }`}
          >
            <a
              className={`btn-login-popup relative items-center justify-center overflow-hidden h-10 w-auto px-3 sm:px-4 rounded-xl text-bittersweet-400 sm:text-white sm:bg-bittersweet-400 hover:brightness-90 active:scale-95 transition ${
                isChanged ? "hidden" : "inline-flex"
              }`}
              href="/login"
              aria-label="Iniciar sesión"
            >
              Iniciar sesión
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LandingHeader;
