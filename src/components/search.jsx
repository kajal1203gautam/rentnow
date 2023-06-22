import React from 'react'

const Search = () => {
    return (
        <section class="header-section">
            <div class="container">
                <div class="center-div align-items-center">
                    <h1 class="text-center  text-white pt-5 ">Search & Hire Cars</h1>
                </div>
                <div class="row">
                    <div class="col-lg-3">
                        <form>
                            <div class="col-auto">
                                <label class="sr-only" for="inlineFormInputGroup">Pick Up Location</label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text p-0 m-0 "><i class="fa fa-map-marker"></i>
                                        </div>
                                        <input type="text" class="form-control " id="inlineFormInputGroup"
                                            placeholder="Pick up Location" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-3">
                        <div class="col-auto">
                            <label class="sr-only" for="inlineFormInputGroup">Drop Location</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text p-0 m-0"><i class="fa fa-map-marker"></i></div>
                                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Pick up Location" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <input type="date" class="form-control" />
                            </div>
                            <input type="time" class="form-control" />

                        </div>
                    </div>
                    <div class="col-lg-3 ">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <input type="date" class="form-control" />
                            </div>


                        </div>
                    </div>

                </div>
                <div class="text-center pt-5">
                    <button class="btn btn-warning btn-lg text-white"> <i class="fa fa-search text-white"></i>Find Now</button>
                </div>
            </div>
        </section>

    )
}

export default Search