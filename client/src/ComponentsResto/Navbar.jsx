import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLogSin = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-5" to="/dashResto">Bena</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-5">
                                <Link className="nav-link active" aria-current="page" to="/dashResto">Accueil</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link" to="/LoginResto">Connexion</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default NavbarLogSin