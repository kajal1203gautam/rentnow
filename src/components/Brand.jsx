import React from 'react'

const Brand = () => {
    return (
        <>
            <section className="car-search-results">
                <div className="container">
                    <div className="row pt-5 text-center">
                        <div className="col-lg-12">
                            <div className="car-search-filters">
                                <div className="car-search-filter-items">
                                    <lable>Car Brand:</lable>
                                    <select className="brand-section">
                                        <option value="Any">Any </option>
                                        <option value="Rover">Rover</option>
                                        <option value="Lexus">Lexus </option>
                                        <option value="BMW">BMW </option>
                                        <option value="Tesla">Tesla </option>
                                        <option value="Lemborghini">Lemborghini </option>
                                    </select>
                                </div>
                                <div className="car-search-filter-items">
                                    <lable>Passengers:</lable>
                                    <select className="brand-section">
                                        <option value="Any">Any </option>
                                        <option value="2">2</option>
                                        <option value="3">3 </option>
                                        <option value="4">4</option>
                                        <option value="5">5 </option>
                                        <option value="6">6 </option>
                                    </select>
                                </div>
                                <div className="car-search-filter-items">
                                    <lable>Color:</lable>
                                    <ul className="car-color-filter">
                                        <li>
                                            <lable><input type="checkbox" /><span className="rn-color-silver" ></span></lable>
                                        </li>
                                        <li>
                                            <lable><input type="checkbox" /><span className="rn-color-black" ></span></lable>
                                        </li>
                                        <li>
                                            <lable><input type="checkbox" /><span className="rn-color-white"></span></lable>
                                        </li>
                                        <li>
                                            <lable><input type="checkbox" /><span className="rn-color-red" ></span></lable>
                                        </li>
                                    </ul>
                                </div>
                                <div className="car-search-filter-items">
                                    <lable>Sort By:</lable>
                                    <select className="brand-section">
                                        <option value="Default">Default </option>
                                        <option value="Relavent">Relavent</option>
                                        <option value="Price:High to Low">Price:High to Low </option>
                                        <option value="Price:Low to High">Price:Low to High</option>
                                        <option value="Name:A to Z">Name:A to Z</option>
                                        <option value="Name:A to Z">Name:A to Z </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="black-sedan">
                        <div className="row">
                            <div className="col-lg-3">
                                <img src="images/car-1.jpg" alt="" height="200px" width="250px" />
                            </div>
                            <div className="col-lg-6">
                                <h1>Black Sedan</h1>
                                <div className=" text-warning ">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                </div>
                                <p>Mauris semper nisl a massa convallis</p>
                                <div className="lang-list">
                                    <ul><i className="fa fa-user">3 Passengers</i>
                                        <i className="fa fa-automobile">2 Luggages</i>
                                        <i className="fa fa-dot-circle-o">Gas</i>
                                        <i className="fa fa-user">Auto</i>
                                    </ul>
                                </div>
                                <p>More Information</p>



                            </div>
                            <div className="col-lg-3">
                                <p>
                                    <h3> <span>$800</span></h3>/total</p>
                                <p>$700/day</p>
                                <button className="btn btn-success btn-lg">Book Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="black-sedan">
                        <div className="row">
                            <div className="col-lg-3">
                                <img src="images/car-4.jpg" alt="" height="200px" width="250px" />
                            </div>
                            <div className="col-lg-6">
                                <h1>Black Sedan</h1>
                                <div className="text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                </div>
                                <p>Mauris semper nisl a massa convallis</p>
                                <div className="lang-list">
                                    <ul><i className="fa fa-user">3 Passengers</i>
                                        <i className="fa fa-automobile">2 Luggages</i>
                                        <i className="fa fa-dot-circle-o">Gas</i>
                                        <i className="fa fa-user">Auto</i>
                                    </ul>
                                </div>
                                <p>More Information</p>



                            </div>
                            <div className="col-lg-3">
                                <p>
                                    <h3> <span>$800</span></h3>/total</p>
                                <p>$700/day</p>
                                <button className="btn btn-success btn-lg">Book Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="black-sedan">
                        <div className="row">
                            <div className="col-lg-3">
                                <img src="images/car-3.jpg" alt="" height="200px" width="250px" />
                            </div>
                            <div className="col-lg-6">
                                <h1>Black Sedan</h1>
                                <div className="text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                </div>
                                <p>Mauris semper nisl a massa convallis</p>
                                <div className="lang-list">
                                    <ul><i className="fa fa-user">3 Passengers</i>
                                        <i className="fa fa-automobile">2 Luggages</i>
                                        <i className="fa fa-dot-circle-o">Gas</i>
                                        <i className="fa fa-user">Auto</i>
                                    </ul>
                                </div>
                                <p>More Information</p>



                            </div>
                            <div className="col-lg-3">
                                <p>
                                    <h3> <span>$800</span></h3>/total</p>
                                <p>$700/day</p>
                                <button className="btn btn-success btn-lg">Book Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="black-sedan">
                        <div className="row">
                            <div className="col-lg-3">
                                <img src="images/car-2.jpg" alt="" height="200px" width="250px" />
                            </div>
                            <div className="col-lg-6">
                                <h1>Black Sedan</h1>
                                <div className="text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                </div>
                                <p>Mauris semper nisl a massa convallis</p>
                                <div className="lang-list">
                                    <ul><i className="fa fa-user">3 Passengers</i>
                                        <i className="fa fa-automobile">2 Luggages</i>
                                        <i className="fa fa-dot-circle-o">Gas</i>
                                        <i className="fa fa-user">Auto</i>
                                    </ul>
                                </div>
                                <p>More Information</p>



                            </div>
                            <div className="col-lg-3">
                                <p>
                                    <h3> <span>$800</span></h3>/total</p>
                                <p>$700/day</p>
                                <button className="btn btn-success btn-lg">Book Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pb-5">
                        <a className="btn btn-lg btn-outline-success mb-40" href="#">Load More</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brand