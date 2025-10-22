import { useState } from "react";


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="header">

            <div className="topbar">
                <div className="container topbar__inner">
                    <div className="contact-info">
                        <i className="fa-regular fa-envelope"><a href="mailto:whereto@web.de" target="_blank">whereto@web.de</a></i>
                    </div>
                    <div className="social-links">
                        <a href="https://www.instagram.com/whereto.mas/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="branding">
                <div className="container branding__inner">

                {/* Logo */}
                <a href="/" className="logo">
                    <img src="/img/logos/logo.png" alt="Where To logo" className="logo-img"/>
                </a>

                {/* Navigation */}
                <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
                    <ul>
                    <li>
                        <a href="/" className="active"> Home </a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>

                    <li className="has-dropdown">
                        <a href="/categories">Events</a>
                        <ul className="dropdown">
                        <li><a href="/categories?filter=filter-house">House</a></li>
                        <li><a href="/categories?filter=filter-techno">Techno</a></li>
                        <li><a href="/categories?filter=filter-pop">Pop</a></li>
                        <li><a href="/categories?filter=filter-rb">R&B</a></li>
                        <li><a href="/categories">Explore</a></li>
                        </ul>
                    </li>

                    <li className="has-dropdown">
                        <a href="/organisers">Organisers</a>
                        <ul className="dropdown">
                        <li><a href="/organisers?filter=filter-org">Event Organisers</a></li>
                        <li><a href="/organisers?filter=filter-venue">Venues</a></li>
                        <li><a href="/organisers">Explore</a></li>
                        </ul>
                    </li>

                    <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>

                {/* Mobile Nav Toggle */}
                <button
                    className="nav-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
                </div>
            </div>
            </header>
    );
}
