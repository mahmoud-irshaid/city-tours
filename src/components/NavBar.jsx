import React, { Component } from 'react';
class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">City Tour</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="d-flex justify-content-around w-100">
                        <a className="nav-link active navLink" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-link navLink" href="#">Features</a>
                        <a className="nav-link navLink" href="#">Pricing</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;