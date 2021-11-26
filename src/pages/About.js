import React from 'react'
import {useNavigate} from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>About Astriweb</h1>
            <p>lorem20</p>

            <button onClick={() =>navigate('/contact')}>Contact us now</button>
        </div>
    )
}

export default About
