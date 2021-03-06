import React, { Component } from "react";
import logo from "../logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <img
                        src={logo}
                        className="nav-logo"
                        alt="Logo"
                        onClick={this.scrollToTop}
                    />
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="front"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Silly Wheelie
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="urbanExplorer"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Project: Urban Explorer
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="completedMap"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Completed status
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="stats"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Other Stats
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}