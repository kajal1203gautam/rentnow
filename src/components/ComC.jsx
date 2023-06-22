import React from 'react'
import { FirstName, LastName } from '../App'

const ComC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(Fname) => {
                    return (
                        <LastName.Consumer>
                            {(Lname) => {
                                return (
                                    <h3>
                                        My Name is {Fname} {Lname}.
                                    </h3>
                                );
                            }

                            }

                        </LastName.Consumer>
                    );

                }

                }



            </FirstName.Consumer>


        </>
    )
}

export default ComC