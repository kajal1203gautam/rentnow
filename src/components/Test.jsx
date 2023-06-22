import React from 'react'

const Test = () => {
  return (
    <section className=" cr-text testimonial-section">
    <div className="cr-text-overlayer"></div>
    <div className="container">
        <div className="row pt-5">
            <div className="col-lg-6">
                <h1 className="text-white text-heading">Testimonials</h1>

                <div id="Testimonials" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div><i className="fa fa-quote-left" ></i></div>
                            <p className="text-white">Quisque ut arcu vitae elit egestas lobortis. Vivamus vehicula
                                tortor molestie urna laoreet congue.
                                Fusce iaculis eros id
                                neque maximus tristique.</p>
                            <h4 className="text-white">Catherine Beck</h4>
                            <h6 className="text-white">CEO, Example Inc.</h6>
                        </div>
                        <div className="carousel-item">
                            <div><i className="fa fa-quote-left" ></i></div>
                            <p className="text-white">Quisque ut arcu vitae elit egestas lobortis. Vivamus vehicula
                                tortor molestie urna laoreet congue.
                                Fusce iaculis eros id
                                neque maximus tristique.</p>
                            <h4 className="text-white">Catherine Beck</h4>
                            <h6 className="text-white">CEO, Example Inc.</h6>
                        </div>
                        <div className="carousel-item">
                            <div><i className="fa fa-quote-left" ></i></div>
                            <p className="text-white">Quisque ut arcu vitae elit egestas lobortis. Vivamus vehicula
                                tortor molestie urna laoreet congue.
                                Fusce iaculis eros id
                                neque maximus tristique.</p>
                            <h4 className="text-white">Catherine Beck</h4>
                            <h6 className="text-white">CEO, Example Inc.</h6>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#Testimonials" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#Testimonials" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card ">
                            <div className="card-body">
                                <h1>350 +</h1>
                                <h5 className="card-title">Cars For Rent</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card ">
                            <div className="card-body">
                                <h1>6500 +</h1>
                                <h5 className="card-title">Happy Clients</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-5">
                        <div className="card ">
                            <div className="card-body">
                                <h1>5000 +</h1>
                                <h5 className="card-title">Positive Reviws</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-5">
                        <div className="card">
                            <div className="card-body">
                                <h1>600 +</h1>
                                <h5 className="card-title">Drivers</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Test