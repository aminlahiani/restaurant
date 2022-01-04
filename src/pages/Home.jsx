import React from 'react'
import { HomeBestTable } from '../components/home/HomeBestTable'

import HomeHero from '../components/home/HomeHero'
import HomeSection from '../components/home/HomeSection'
import { GridList1 } from '../components/home/GridList1'


function Home() {
    return (
        <div>
            <HomeHero />
            <HomeSection/>
            <HomeBestTable/>
            <GridList1/>
        </div>
    )
}

export default Home
