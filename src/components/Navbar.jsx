import React from 'react';

function Navbar() {
    return (
        <div id="sticky-wrapper" className="sticky-wrapper" style={{ height: '83px' }}>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        Festava Live
                    </a>

                    <a href="ticket.html" className="btn custom-btn d-lg-none ms-auto me-4">Buy Ticket</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_1">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_2">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_3">Artists</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_4">Schedule</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_5">Pricing</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_6">Contact</a>
                            </li>
                        </ul>

                        <a href="ticket.html" className="btn custom-btn d-lg-block d-none">Buy Ticket</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
