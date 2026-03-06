import { useEffect, useState } from "react";
import Logo from "../header/Logo";
import DesktopMenu from "../header/DesktopMenu";
import MobileMenu from "../header/MobileMenu";
import HamburgerButton from "../header/HamburgerButton";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const menuItems = ["Inicio", "Servicios", "Portfolio", "Nosotros", "Contacto"];

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 640);
      if (window.innerWidth >= 640) {
        setOpen(false);
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 bg-[#020b10]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Logo />

        {isDesktop ? (
          <DesktopMenu items={menuItems} />
        ) : (
          <HamburgerButton 
            open={open} 
            toggle={() => setOpen(!open)} 
          />
        )}
      </div>

      {!isDesktop && open && (
        <MobileMenu 
          items={menuItems} 
          close={() => setOpen(false)} 
        />
      )}
    </header>
  );
};

export default Header;