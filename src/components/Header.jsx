import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="rn-top">
        <div className="top-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <ul className="h-social">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <div className="r-icon-contents">
                            <div className="phone-icon">
                                <div className="icon">
                                    <a href="#"><i className="fa fa-phone"></i></a>
                                </div>
                                <div className="rn-info">
                                    <ul>
                                        <li>(954)-944-1250</li>
                                        <li>(954)-944-1250</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="email-icon">
                                <div className="icon">
                                    <a href="#"><i className="fa fa-envelope"></i></a>
                                </div>
                                <div className="rn-info">
                                    <ul>
                                        <li>support@example.coms</li>
                                        <li>sale@example.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="location-icon">
                                <div className="icon">
                                    <a href="#"><i className="fa fa-map-marker"></i></a>
                                </div>
                                <div className="rn-info">
                                    <ul>
                                        <li>1425 Pointe Lane, Miami</li>
                                        <li>Florida – 33169, USA</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <nav className="navbar navbar-expand-lg ">
                <Link className="navbar-brand" to={"/"}>
                    <h1><i className="text-success">RENT</i><i className="text-white">NOW</i></h1>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="btn btn-success" to={"/"} >Home</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Cars
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to={"/Cars"}>Car list</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to={"/CarSearch"}>Car Search</Link>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Car single</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="checkout.html">Check Out</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="cart.html">Cart</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pages
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to={"/About"} >About us</Link>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="fullwidth.html">Full Width Page</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="rightsidebar.html">Right sidebar Page</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="leftsidebar.html">LeftSide Bar</a>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to={"/Faq"}>FAQ</Link>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="gallery.html">Gallery</a>

                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/Services"}>Service</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Blog
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to={"/Blog"}>Blog List</Link>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="bloggrid.html">Blog Grid</a>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to={"/single-post"}>Single Post</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/Contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    
  )
}

export default Header