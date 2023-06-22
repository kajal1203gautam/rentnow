import React from 'react'
import Slider from '../components/Slider'
import Search from '../components/search'
import People from '../components/People'
import Popular from '../components/Popular'
import Car from '../components/Car'
import Test from '../components/Test'
import News from '../components/News'

const Home = () => {
    return (
        <>
        <Slider />
        <Search />
        <People />
        <Popular/>
        <Car />
        <Test />
        <News />
        </>
    )
}

export default Home