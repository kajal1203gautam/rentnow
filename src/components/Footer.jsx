import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <div className="footer-widget"></div>
                <div className="container">
                    <div className="row text-white justify-content-center pt-5">
                        <div className="col-lg-3">
                            <h2 className="text-white">About us</h2>
                            <h1 className="text-success"><i>RENT</i><i className="text-white">NOW</i></h1>
                            <p className="text-white">Sed sit amet ligula ac nulla finibus euismod nec nec diam. Lorem ipsum dolor
                                sit amet,
                                consectetur adipiscing elit.
                                Praesent semper, risus eget ornare maximus, ipsum ante semper.</p>
                        </div>
                        <div className="col-lg-3">
                            <h2>Qucik Link</h2>
                            <ul className="footer-list">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">About us</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h2>Blogs</h2>
                            <ul className="footer-list">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">About us</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h2>Contact Us</h2>
                            <div className="widget-content">
                                <div className="phone-icon-content">
                                    <div className="rn-icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="mn-content">
                                        <ul>
                                            <li>(954)-944-1250</li>
                                            <li>(954)-944-1251</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="phone-icon-content">
                                    <div className="rn-icon">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <div className="mn-content">
                                        <ul>
                                            <li>(954)-944-1250</li>
                                            <li>(954)-944-1251</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="phone-icon-content">
                                    <div className="rn-icon">
                                        <i className="fa fa-map-marker"></i>
                                    </div>
                                    <div className="mn-content">
                                        <ul>
                                            <li>(954)-944-1250</li>
                                            <li>(954)-944-1251</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-copy-right">
                <div className="container">
                    <div className="row align-item-center">
                        <div className="col-md-6">
                            <p>Copyright © RentNow 2018. All rights reserved.</p>
                        </div>
                        <div className="col-md-6 text-right">
                            <span className="rn-pyament-methods">
                                <img src="images/payments.png" alt="payments" />
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer