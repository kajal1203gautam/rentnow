import React from 'react'

const Slider = () => {
  return (
   <>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src="images/car1.jpg" height="650" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                    <h1>Quality Cars with Unlimited Miles</h1>
                    <p>Maecenas viverra porta eros, id tincidunt lorem rhoncus eget. Aliquam erat volutpat. Sed
                    ultricies elementum egestas.
                    </p>
                    <button className="btn btn-success btn-lg my-2 my-sm-0" type="submit">Book Now</button>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="images/car1.jpg" height="650" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                    <h1>24/7 Customer Support Guarantee</h1>
                    <p>Maecenas viverra porta eros, id tincidunt lorem rhoncus eget. Aliquam erat volutpat. Sed
                        ultricies elementum
                        egestas.
                    </p>
                    <button className="btn btn-success btn-lg my-2 my-sm-0" type="submit">Book Now</button>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="images/car1.jpg" height="650" alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                    <h1>#1 Car Rent Service In Your City</h1>
                    <p>Maecenas viverra porta eros, id tincidunt lorem rhoncus eget. Aliquam erat volutpat. Sed
                        ultricies elementum egestas.
                    </p>
                    <button className="btn btn-success btn-lg my-2 my-sm-0" type="submit">Book Now</button>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
   </>
  )
}

export default Slider