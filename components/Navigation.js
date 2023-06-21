"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navigation = () => {
    const [showNav, setShowNav] = useState(true);
    const [mobileIcon, setMobileIcon] = useState(true);

    const handleShowNav = () => {
        setMobileIcon(!mobileIcon);
        setShowNav(!showNav);
        window.scrollTo(0, 0);
    };

    const handleClickLink = () => {
        setMobileIcon(!mobileIcon);
        setShowNav(!showNav);
    };

    return (
        <header>
            <nav>
                {mobileIcon ? (
                    <GiHamburgerMenu
                        onClick={handleShowNav}
                        className="navButton"
                    />
                ) : (
                    <AiOutlineClose
                        onClick={handleShowNav}
                        className="navButton"
                    />
                )}
                {showNav ? (
                    <div className="section-link-container-mobile">
                        <Link className="section-nav-links" href="/">
                            Home
                        </Link>

                        <Link className="section-nav-links" href="/profile">
                            Profile
                        </Link>
                        <Link className="section-nav-links" href="/skill">
                            Skill
                        </Link>
                        <Link className="section-nav-links" href="/project">
                            Project
                        </Link>
                    </div>
                ) : (
                    <div className="section-link-container-desktop">
                        <div className="section-link-container-blank"></div>
                        <Link
                            onClick={handleClickLink}
                            className="section-nav-links"
                            href="/"
                        >
                            Home
                        </Link>

                        <Link
                            onClick={handleClickLink}
                            className="section-nav-links"
                            href="/profile"
                        >
                            Profile
                        </Link>
                        <Link
                            onClick={handleClickLink}
                            className="section-nav-links"
                            href="/skill"
                        >
                            Skill
                        </Link>
                        <Link
                            onClick={handleClickLink}
                            className="section-nav-links"
                            href="/project"
                        >
                            Project
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navigation;
