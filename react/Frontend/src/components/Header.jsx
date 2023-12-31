import { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const { isAuthenticated, userName } = useAuth();

  const isActive = (path) => {
    return window.location.pathname === path ? "active-tab" : "";
  };

  const current = (path) => {
    return window.location.pathname === path ? "current" : "";
  };

  return (
    <>
      <header className="main-header-three">
        <nav className="main-menu main-menu-three">
          <div className="main-menu-three__wrapper">
            <div className="main-menu-wrapper__logo">
              <a href="index.html">
                <img src="/logo-1.png" alt="Logo" />
              </a>
            </div>
            <div className="main-menu-three__main-menu">
              <a href="#" className="mobile-nav__toggler">
                <i className="fa fa-bars"></i>
              </a>
              <ul className="main-menu__list">
                <li className={current("/")}>
                  <a href="/" className={isActive("/")}>
                    Beranda
                  </a>
                </li>
                <li className={current("/service")}>
                  <a href="service" className={isActive("/service")}>
                    Layanan Kami
                  </a>
                </li>
                <li className={current("/process")}>
                  <a href="process" className={isActive("/process")}>
                    Cara Kerja
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Informasi
                  </a>
                  <ul className="dropdown-menu">
                    <li className={current("/information")}>
                      <a
                        href="information"
                        className={isActive("/information")}>
                        Bank Sampah
                      </a>
                    </li>
                    <li className={current("/trash-selection")}>
                      <a
                        href="trash-selection"
                        className={isActive("/trash-selection")}>
                        Pemilihan Sampah
                      </a>
                    </li>
                  </ul>
                </li>
                <li className={current("/about")}>
                  <a href="about" className={isActive("/about")}>
                    Tentang Kami
                  </a>
                </li>
                <li className={current("/contact")}>
                  <a href="contact" className={isActive("/contact")}>
                    Kontak Kami
                  </a>
                </li>
              </ul>
            </div>
            <div className="main-menu-three__right">
              <div className="main-menu-three__search-box">
                {isAuthenticated ? (
                  <span>{userName || "User"}</span>
                ) : (
                  <a href="login" className={current("/login")}>
                    Masuk
                  </a>
                )}
              </div>
              <div className="main-menu-three__call">
                <div className="main-menu-three__call-icon">
                  <span className="icon-budget"></span>
                </div>
                <div className="main-menu-three__call-number">
                  <h5>
                    <a href="point" className={isActive("/point")}>
                      Point
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
