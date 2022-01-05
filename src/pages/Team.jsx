import React from 'react'
import { TeamComponent } from '../components/team/team-component'
import { TeamHero } from '../components/team/team-hero'

function Team() {
    return (
        <div>
            <TeamHero/>
            <TeamComponent/>
        </div>
    )
}

export default Team
