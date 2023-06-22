import React from 'react'

const SinglePostHero = () => {
  return (
    <>
      <div className="rn-page-title">
        <div className="rn-pt-overlayer"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="rn-page-title-inner">
                        <h1 className="text-center text-white">A standard blog post with image</h1>
                        <p className="text-center text-white">Cras eros lorem, rhoncus ac risus sit amet, fringilla ultrices
                            purus.</p>
                        <p className="text-white text-center">In News</p>
                        <div className="single-icon text-center">
                            <ul>
                                <i className="fa fa-dot-circle-o">By John Doe</i>
                                <i className="fa fa-dot-circle-o">At 15 May, 2018</i>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SinglePostHero